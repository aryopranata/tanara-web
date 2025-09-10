'use client';

import React, { useState } from 'react';
import { scoreQuiz, QuizAnswers, QuizResult } from '../../lib/scoreQuiz';

// Options for each quiz step
const FAMILY_OPTIONS = ['citrus', 'floral', 'woody'];
const INTENSITY_OPTIONS = ['light', 'medium', 'strong'];
const TIME_OPTIONS = ['day', 'night'];
const MOOD_OPTIONS = ['fresh', 'romantic', 'warm'];
const SKIN_OPTIONS = ['dry', 'normal', 'oily'];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    family: '',
    intensity: '',
    time: '',
    mood: '',
    skin: '',
  });
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleSelect = (field: keyof QuizAnswers, value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);
    if (step < 4) {
      setStep(step + 1);
    } else {
      const scored = scoreQuiz(updated);
      setResult(scored);
      setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Question
            title="Select your favorite fragrance family"
            options={FAMILY_OPTIONS}
            onSelect={(v) => handleSelect('family', v)}
          />
        );
      case 1:
        return (
          <Question
            title="Preferred intensity"
            options={INTENSITY_OPTIONS}
            onSelect={(v) => handleSelect('intensity', v)}
          />
        );
      case 2:
        return (
          <Question
            title="When will you wear it?"
            options={TIME_OPTIONS}
            onSelect={(v) => handleSelect('time', v)}
          />
        );
      case 3:
        return (
          <Question
            title="What's your mood?"
            options={MOOD_OPTIONS}
            onSelect={(v) => handleSelect('mood', v)}
          />
        );
      case 4:
        return (
          <Question
            title="Skin type"
            options={SKIN_OPTIONS}
            onSelect={(v) => handleSelect('skin', v)}
          />
        );
      default:
        return renderResult();
    }
  };

  const renderResult = () => {
    if (!result || !result.scent) return <p>We couldn't find a match.</p>;
    return (
      <div>
        <h2>We recommend: {result.scent.name}</h2>
        <p>Confidence: {(result.confidence * 100).toFixed(0)}%</p>
        <button onClick={() => console.log('add to cart', result.scent.id)}>
          Add to Cart
        </button>
        <button onClick={() => console.log('view details', result.scent.id)}>
          View Details
        </button>
        {result.confidence < 0.25 && (
          <div>
            <p>Not sure? Try our Discovery Set!</p>
            <button onClick={() => console.log('add discovery set')}>Add Discovery Set</button>
          </div>
        )}
      </div>
    );
  };

  return <div>{renderStep()}</div>;
}

interface QuestionProps {
  title: string;
  options: string[];
  onSelect(value: string): void;
}

function Question({ title, options, onSelect }: QuestionProps) {
  return (
    <div>
      <h2>{title}</h2>
      {options.map((o) => (
        <button key={o} onClick={() => onSelect(o)} style={{ display: 'block', margin: '8px 0' }}>
          {o}
        </button>
      ))}
    </div>
  );
}

