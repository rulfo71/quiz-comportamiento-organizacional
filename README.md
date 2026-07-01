# Quiz · Comportamiento Organizacional

App web interactiva para practicar el examen final de **Comportamiento Organizacional** (MBA · Universidad de San Andrés).

38 preguntas de opción múltiple con feedback inmediato, transiciones fluidas y un resumen final con desempeño por clase y repaso de errores.

## Características

- **Barajado en cada intento**: el orden de las preguntas y la posición de las opciones se aleatorizan, así la respuesta correcta no cae siempre en la misma letra.
- **Feedback inmediato**: marca la correcta/incorrecta al instante.
- **Resumen final**: score global, desglose por clase y lista de preguntas para repasar.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para las transiciones

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Contenido

Las preguntas están en [`lib/questions.ts`](lib/questions.ts). Cada una guarda sus opciones en el orden original y el índice de la correcta; el barajado ocurre en runtime ([`lib/shuffle.ts`](lib/shuffle.ts)).

---

### Roadmap (2º entregable)

- Registrar de forma anónima cuántas personas completaron el quiz.
- Comparar tu resultado con el promedio de los demás (sin autenticación).
