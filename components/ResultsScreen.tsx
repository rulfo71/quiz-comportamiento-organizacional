"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Answer } from "./Quiz";
import { submitResult, type QuizStats } from "@/lib/supabase";
import Comparison from "./Comparison";

function verdict(pct: number) {
  if (pct >= 90) return { title: "Excelente", note: "Estás listo para el final.", tone: "text-correct" };
  if (pct >= 75) return { title: "Muy bien", note: "Buen dominio, afiná los detalles.", tone: "text-correct" };
  if (pct >= 60) return { title: "Vas bien", note: "Repasá los temas que fallaste.", tone: "text-teal-deep" };
  if (pct >= 40) return { title: "A reforzar", note: "Conviene volver a los resúmenes.", tone: "text-wrong" };
  return { title: "A darle", note: "Repasá el material y probá de nuevo.", tone: "text-wrong" };
}

export default function ResultsScreen({
  answers,
  total,
  onRestart,
}: {
  answers: Answer[];
  total: number;
  onRestart: () => void;
}) {
  const score = answers.filter((a) => a.isCorrect).length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const v = verdict(pct);

  // Registro anónimo + estadísticas de comparación (una sola vez).
  const [stats, setStats] = useState<QuizStats | null>(null);
  const [statsState, setStatsState] = useState<"loading" | "done" | "off">(
    "loading"
  );
  const submitted = useRef(false);
  useEffect(() => {
    if (submitted.current) return;
    submitted.current = true;
    submitResult(score, total).then((s) => {
      setStats(s);
      setStatsState(s ? "done" : "off");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Contador animado del porcentaje
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * pct));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  const byClase = useMemo(() => {
    const map = new Map<string, { correct: number; total: number }>();
    for (const a of answers) {
      const key = a.question.clase;
      const entry = map.get(key) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (a.isCorrect) entry.correct += 1;
      map.set(key, entry);
    }
    return Array.from(map.entries());
  }, [answers]);

  const wrong = answers.filter((a) => !a.isCorrect);

  const R = 52;
  const C = 2 * Math.PI * R;

  return (
    <div className="flex flex-1 flex-col py-4">
      {/* Encabezado con anillo de score */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative h-40 w-40">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r={R} fill="none" stroke="var(--line)" strokeWidth="9" />
            <motion.circle
              cx="60"
              cy="60"
              r={R}
              fill="none"
              stroke="var(--teal-deep)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              animate={{ strokeDashoffset: C - (C * pct) / 100 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-4xl font-semibold text-ink">
              {display}%
            </span>
            <span className="font-sans text-xs font-medium text-muted">
              {score} de {total}
            </span>
          </div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`font-display text-3xl font-semibold ${v.tone}`}
          >
            {v.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-1 font-sans text-sm text-ink-soft"
          >
            {v.note}
          </motion.p>
        </div>
      </div>

      {/* Desglose por clase */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="mt-9"
      >
        <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Desempeño por clase
        </h3>
        <div className="flex flex-col gap-3">
          {byClase.map(([clase, { correct, total: t }], i) => {
            const p = Math.round((correct / t) * 100);
            return (
              <div key={clase} className="font-sans">
                <div className="mb-1 flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-ink">
                    {clase.replace(/^Clase \d+: /, "")}
                  </span>
                  <span className="flex-none text-xs font-semibold text-ink-soft">
                    {correct}/{t}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/70">
                  <motion.div
                    className={`h-full rounded-full ${
                      p >= 60 ? "bg-teal-deep" : "bg-wrong"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${p}%` }}
                    transition={{ delay: 0.75 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Comparación con los demás (registro anónimo) */}
      {statsState === "loading" && (
        <div className="mt-9 flex items-center justify-center gap-3 rounded-3xl border border-line bg-paper-alt/40 py-8 font-sans text-sm text-muted">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-line border-t-teal-deep" />
          Registrando tu resultado…
        </div>
      )}
      {statsState === "done" && stats && (
        <Comparison stats={stats} myPct={pct} />
      )}

      {/* Repaso de errores */}
      {wrong.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-9"
        >
          <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Para repasar ({wrong.length})
          </h3>
          <div className="flex flex-col gap-3">
            {wrong.map((a) => (
              <div
                key={a.question.id}
                className="rounded-2xl border border-line bg-paper-alt/40 p-4 font-sans"
              >
                <p className="text-sm font-medium leading-snug text-ink">
                  {a.question.question}
                </p>
                <div className="mt-3 flex items-start gap-2 text-[0.82rem] leading-snug text-wrong">
                  <span className="mt-0.5 flex-none font-semibold">Tu respuesta:</span>
                  <span>{a.question.shuffledOptions[a.selectedIndex]}</span>
                </div>
                <div className="mt-1 flex items-start gap-2 text-[0.82rem] leading-snug text-correct">
                  <span className="mt-0.5 flex-none font-semibold">Correcta:</span>
                  <span>
                    {a.question.shuffledOptions[a.question.shuffledCorrectIndex]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-col gap-3 pb-2 sm:flex-row"
      >
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 font-sans text-base font-semibold text-paper shadow-lift transition-colors hover:bg-teal-deep"
        >
          <span className="transition-transform duration-300 group-hover:-rotate-180">
            ↻
          </span>
          Volver a practicar
        </motion.button>
      </motion.div>
    </div>
  );
}
