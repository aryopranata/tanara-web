export interface QuizAnswers {
  family: string;
  intensity: string;
  time: string;
  mood: string;
  skin: string;
}

export interface Scent {
  id: string;
  name: string;
  family: string;
  intensity: string;
  time: string;
  mood: string;
  skin: string;
}

export interface QuizResult {
  scent: Scent | null;
  confidence: number; // 0-1
}

// Example catalogue; in a real app this would likely come from an API or DB
export const SCENTS: Scent[] = [
  {
    id: 's1',
    name: 'Citrus Splash',
    family: 'citrus',
    intensity: 'light',
    time: 'day',
    mood: 'fresh',
    skin: 'dry',
  },
  {
    id: 's2',
    name: 'Woodland Evening',
    family: 'woody',
    intensity: 'strong',
    time: 'night',
    mood: 'warm',
    skin: 'oily',
  },
  {
    id: 's3',
    name: 'Floral Dream',
    family: 'floral',
    intensity: 'medium',
    time: 'day',
    mood: 'romantic',
    skin: 'normal',
  },
];

/**
 * Scores the quiz answers against the scent catalogue and returns
 * the best match and a confidence score (0-1).
 *
 * The confidence represents the percentage of matching attributes
 * out of the total number of questions.
 */
export function scoreQuiz(answers: QuizAnswers, scents: Scent[] = SCENTS): QuizResult {
  const totalQuestions = Object.keys(answers).length;
  let best: Scent | null = null;
  let bestScore = -1;

  for (const scent of scents) {
    let score = 0;
    if (scent.family === answers.family) score++;
    if (scent.intensity === answers.intensity) score++;
    if (scent.time === answers.time) score++;
    if (scent.mood === answers.mood) score++;
    if (scent.skin === answers.skin) score++;

    if (score > bestScore) {
      bestScore = score;
      best = scent;
    }
  }

  const confidence = totalQuestions === 0 ? 0 : bestScore / totalQuestions;
  return { scent: best, confidence };
}
