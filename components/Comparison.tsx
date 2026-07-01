"use client";

import { motion } from "framer-motion";
import type { QuizStats } from "@/lib/supabase";

const BUCKET_LABELS = ["0–20", "20–40", "40–60", "60–80", "80–100"];

/** En qué bucket (0..4) cae un porcentaje dado. */
function bucketOf(pct: number) {
  if (pct >= 80) return 4;
  return Math.min(4, Math.floor(pct / 20));
}

export default function Comparison({
  stats,
  myPct,
}: {
  stats: QuizStats;
  myPct: number;
}) {
  const myBucket = bucketOf(myPct);
  const maxCount = Math.max(1, ...stats.distribution);
  const beatsMost = stats.better_than >= 50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="mt-9 rounded-3xl border border-line bg-paper-alt/40 p-5 sm:p-6"
    >
      <h3 className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        Cómo te fue vs. los demás
      </h3>
      <p className="mb-5 font-sans text-sm text-muted">
        {stats.unique_people.toLocaleString("es-AR")}{" "}
        {stats.unique_people === 1 ? "persona ya hizo" : "personas ya hicieron"} la
        práctica · {stats.total_attempts.toLocaleString("es-AR")}{" "}
        {stats.total_attempts === 1 ? "intento" : "intentos"} en total
      </p>

      {/* Métricas */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line bg-paper/60 px-4 py-3 text-center">
          <div className="font-display text-3xl font-semibold text-teal-deep">
            {stats.better_than}%
          </div>
          <div className="mt-0.5 font-sans text-xs text-ink-soft">
            sacaste más que este % de los intentos
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-paper/60 px-4 py-3 text-center">
          <div className="font-display text-3xl font-semibold text-ink">
            {stats.avg_pct}%
          </div>
          <div className="mt-0.5 font-sans text-xs text-ink-soft">
            promedio general{" "}
            <span className={myPct >= stats.avg_pct ? "text-correct" : "text-wrong"}>
              (vos {myPct >= stats.avg_pct ? "+" : ""}
              {myPct - stats.avg_pct})
            </span>
          </div>
        </div>
      </div>

      {/* Distribución */}
      <div className="mb-2 font-sans text-xs font-medium text-ink-soft">
        Distribución de resultados
      </div>
      <div className="flex items-end justify-between gap-2 sm:gap-3">
        {stats.distribution.map((count, i) => {
          const h = (count / maxCount) * 100;
          const mine = i === myBucket;
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-24 w-full items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(count > 0 ? 8 : 2, h)}%` }}
                  transition={{
                    delay: 1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "w-full rounded-t-lg",
                    mine ? "bg-teal-deep" : "bg-line",
                  ].join(" ")}
                  title={`${count} ${count === 1 ? "intento" : "intentos"}`}
                />
              </div>
              <span
                className={[
                  "font-sans text-[0.65rem]",
                  mine ? "font-bold text-teal-deep" : "text-muted",
                ].join(" ")}
              >
                {BUCKET_LABELS[i]}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center font-sans text-xs text-muted">
        {beatsMost
          ? "Estás por encima de la mayoría 💪"
          : "El barrio te está esperando — dale de nuevo 🎯"}{" "}
        · tu franja resaltada en teal
      </p>
    </motion.div>
  );
}
