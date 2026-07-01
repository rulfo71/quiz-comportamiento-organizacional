import type { Question } from "./questions";

export type ShuffledQuestion = Question & {
  /** Opciones ya barajadas para mostrar. */
  shuffledOptions: string[];
  /** Índice de la respuesta correcta dentro de `shuffledOptions`. */
  shuffledCorrectIndex: number;
};

/** Fisher–Yates: baraja una copia del array sin mutar el original. */
export function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Baraja el orden de las preguntas y, dentro de cada una, la posición de las
 * opciones. Así la respuesta correcta no cae siempre en la misma letra.
 */
export function buildQuiz(questions: Question[]): ShuffledQuestion[] {
  return shuffle(questions).map((q) => {
    const correctText = q.options[q.correctIndex];
    const shuffledOptions = shuffle(q.options);
    return {
      ...q,
      shuffledOptions,
      shuffledCorrectIndex: shuffledOptions.indexOf(correctText),
    };
  });
}
