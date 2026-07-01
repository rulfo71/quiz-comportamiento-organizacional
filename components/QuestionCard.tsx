"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ShuffledQuestion } from "@/lib/shuffle";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function QuestionCard({
  question,
  index,
  total,
  onAnswer,
  onNext,
}: {
  question: ShuffledQuestion;
  index: number;
  total: number;
  onAnswer: (selectedIndex: number) => void;
  onNext: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isLast = index + 1 >= total;

  const pick = (i: number) => {
    if (answered) return;
    setSelected(i);
    onAnswer(i);
  };

  const wasCorrect = selected === question.shuffledCorrectIndex;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-1 flex-col"
    >
      <div className="mb-1 flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-teal-deep">
        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
        {question.clase.replace(/^Clase \d+: /, "")} · {question.autor}
      </div>

      <h2 className="mb-6 mt-2 font-display text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.shuffledOptions.map((opt, i) => {
          const isCorrectOption = i === question.shuffledCorrectIndex;
          const isSelected = selected === i;

          let state: "idle" | "correct" | "wrong" | "reveal" | "dim" = "idle";
          if (answered) {
            if (isCorrectOption) state = "correct";
            else if (isSelected) state = "wrong";
            else state = "dim";
          }

          return (
            <motion.button
              key={i}
              onClick={() => pick(i)}
              disabled={answered}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
              whileHover={!answered ? { y: -2 } : undefined}
              whileTap={!answered ? { scale: 0.99 } : undefined}
              className={[
                "group flex items-start gap-4 rounded-2xl border px-4 py-4 text-left font-sans transition-colors duration-300",
                state === "idle" &&
                  "border-line bg-paper-alt/40 hover:border-teal hover:bg-paper-alt/80 cursor-pointer",
                state === "correct" && "border-correct bg-correct-soft",
                state === "wrong" && "border-wrong bg-wrong-soft",
                state === "dim" && "border-line bg-paper-alt/20 opacity-55",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={[
                  "mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg text-sm font-bold transition-colors",
                  state === "idle" &&
                    "bg-paper text-ink-soft group-hover:bg-teal group-hover:text-paper",
                  state === "correct" && "bg-correct text-paper",
                  state === "wrong" && "bg-wrong text-paper",
                  state === "dim" && "bg-paper text-muted",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {state === "correct" ? "✓" : state === "wrong" ? "✕" : LETTERS[i]}
              </span>
              <span
                className={[
                  "pt-0.5 text-[0.98rem] leading-snug",
                  state === "dim" ? "text-ink-soft" : "text-ink",
                ].join(" ")}
              >
                {opt}
              </span>
            </motion.button>
          );
        })}
      </div>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div
            className={[
              "flex items-center gap-2 font-sans text-sm font-semibold",
              wasCorrect ? "text-correct" : "text-wrong",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-6 w-6 items-center justify-center rounded-full text-xs text-paper",
                wasCorrect ? "bg-correct" : "bg-wrong",
              ].join(" ")}
            >
              {wasCorrect ? "✓" : "✕"}
            </span>
            {wasCorrect ? "¡Correcto!" : "Incorrecto — la respuesta correcta está marcada"}
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 font-sans text-sm font-semibold text-paper shadow-card transition-colors hover:bg-teal-deep"
          >
            {isLast ? "Ver resultados" : "Siguiente"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
