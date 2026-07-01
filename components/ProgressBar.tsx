"use client";

import { motion } from "framer-motion";

export default function ProgressBar({
  current,
  total,
  score,
}: {
  current: number;
  total: number;
  score: number;
}) {
  const pct = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="mb-6 pt-1">
      <div className="mb-2 flex items-baseline justify-between font-sans">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
          Pregunta {current + 1}
          <span className="text-muted"> / {total}</span>
        </span>
        <span className="text-xs font-semibold text-teal-deep">
          {score} correcta{score === 1 ? "" : "s"}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/70">
        <motion.div
          className="h-full rounded-full bg-teal-deep"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
