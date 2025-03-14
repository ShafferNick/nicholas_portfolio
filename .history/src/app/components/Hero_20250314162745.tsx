import React from 'react';

type HeroProps = {
  summary: string;
};

export default function Hero({ summary }: HeroProps) {
  return (
    <section className="hero-custom-black py-20 md:py-28 text-left animate-slide-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extralight mb-6" style={{ fontWeight: 200 }}>
          Nicholas Shaffer
        </h1>
        <div className="max-w-2xl mb-8">
          <h3 className="text-lg md:text-xl font-bold mb-4" style={{ fontWeight: 700 }}>
            Professional Summary
          </h3>
          <p className="text-base md:text-lg leading-relaxed font-extralight" style={{ fontWeight: 200 }}>
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}