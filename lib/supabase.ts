import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** Cliente Supabase (o null si faltan las env vars — el quiz sigue funcionando). */
export const supabase =
  url && key
    ? createClient(url, key, {
        auth: { persistSession: false },
        // El quiz vive aislado en su propio schema, separado de `public`.
        db: { schema: "co_quiz" },
      })
    : null;

export type QuizStats = {
  total_attempts: number;
  unique_people: number;
  avg_pct: number;
  /** % de intentos que sacaron menos que vos (tu percentil). */
  better_than: number;
  /** Conteos por bucket: [0-20), [20-40), [40-60), [60-80), [80-100]. */
  distribution: number[];
};

const ANON_KEY = "co_quiz_anon_id";

/** ID anónimo persistente por dispositivo (aprox. "una persona"). */
function getAnonId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(ANON_KEY);
  if (!id) {
    id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(ANON_KEY, id);
  }
  return id;
}

/**
 * Registra el intento de forma anónima y devuelve las estadísticas agregadas
 * (ya incluyendo este intento). Devuelve null si algo falla.
 */
export async function submitResult(
  score: number,
  total: number
): Promise<QuizStats | null> {
  if (!supabase) return null;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  try {
    const { error: insertError } = await supabase
      .from("results")
      .insert({ anon_id: getAnonId(), score, total, pct });
    if (insertError) throw insertError;

    const { data, error: statsError } = await supabase.rpc("stats", {
      p_pct: pct,
    });
    if (statsError) throw statsError;

    return data as QuizStats;
  } catch (err) {
    console.warn("[co_quiz] no se pudo registrar el resultado:", err);
    return null;
  }
}
