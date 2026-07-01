"use client";

import { motion } from "framer-motion";

const CLASES = [
  "Equipos de trabajo",
  "Cultura organizacional",
  "Nuevos modelos org.",
  "Aprendizaje org.",
  "Liderazgo y desempeño",
  "Emociones al liderar",
];

export default function StartScreen({
  total,
  onStart,
}: {
  total: number;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center py-6">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-teal-deep"
      >
        MBA · Universidad de San Andrés
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[2.7rem] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl"
      >
        Comportamiento
        <br />
        <span className="italic text-teal-deep">Organizacional</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.6 }}
        className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink-soft"
      >
        {total} preguntas de opción múltiple para practicar el examen final.
        El orden de preguntas y respuestas se baraja en cada intento.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.32, duration: 0.6 }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {CLASES.map((c, i) => (
          <motion.span
            key={c}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 + i * 0.05, duration: 0.4 }}
            className="rounded-full border border-line bg-paper-alt/60 px-3 py-1 font-sans text-[0.78rem] font-medium text-ink-soft"
          >
            {c}
          </motion.span>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-ink px-7 py-4 font-sans text-base font-semibold text-paper shadow-lift transition-colors hover:bg-teal-deep sm:w-auto"
      >
        Empezar la práctica
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 font-sans text-xs text-muted"
      >
        Sin límite de tiempo · Feedback inmediato en cada respuesta
      </motion.p>
    </div>
  );
}
