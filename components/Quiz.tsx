"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/lib/questions";
import { buildQuiz, type ShuffledQuestion } from "@/lib/shuffle";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import ResultsScreen from "./ResultsScreen";
import ProgressBar from "./ProgressBar";

type Phase = "start" | "playing" | "results";

export type Answer = {
  question: ShuffledQuestion;
  selectedIndex: number;
  isCorrect: boolean;
};

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("start");
  const [deck, setDeck] = useState<ShuffledQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const total = deck.length;

  const start = useCallback(() => {
    setDeck(buildQuiz(questions));
    setAnswers([]);
    setCurrent(0);
    setPhase("playing");
  }, []);

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      setDeck((d) => {
        const q = d[current];
        setAnswers((prev) => [
          ...prev,
          {
            question: q,
            selectedIndex,
            isCorrect: selectedIndex === q.shuffledCorrectIndex,
          },
        ]);
        return d;
      });
    },
    [current]
  );

  const handleNext = useCallback(() => {
    if (current + 1 >= total) {
      setPhase("results");
    } else {
      setCurrent((c) => c + 1);
    }
  }, [current, total]);

  const score = useMemo(
    () => answers.filter((a) => a.isCorrect).length,
    [answers]
  );

  return (
    <div className="flex flex-1 flex-col">
      <AnimatePresence mode="wait">
        {phase === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col"
          >
            <StartScreen total={questions.length} onStart={start} />
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-1 flex-col"
          >
            <ProgressBar
              current={current}
              total={total}
              score={score}
            />
            <div className="relative flex flex-1 flex-col">
              <AnimatePresence mode="wait">
                <QuestionCard
                  key={deck[current].id}
                  question={deck[current]}
                  index={current}
                  total={total}
                  onAnswer={handleAnswer}
                  onNext={handleNext}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {phase === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col"
          >
            <ResultsScreen
              answers={answers}
              total={total}
              onRestart={start}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
