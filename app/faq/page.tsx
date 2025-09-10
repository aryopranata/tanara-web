'use client';

import { useState } from 'react';

const faqs = [
  { question: 'What is Tanara?', answer: 'An artisan fragrance house.' },
  { question: 'Are your products vegan?', answer: 'Yes, completely plant-based.' },
  { question: 'Do you ship internationally?', answer: 'Worldwide shipping is available.' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <h1>FAQ</h1>
      <div>
        {faqs.map((faq, i) => (
          <div key={faq.question}>
            <button onClick={() => toggle(i)}>{faq.question}</button>
            {openIndex === i && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
