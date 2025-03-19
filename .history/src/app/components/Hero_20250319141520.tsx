'use client';
import React from 'react';

type HeroProps = {
  summary: string;
};

export default function Hero({ summary }: HeroProps) {
  return (
    <section className="hero-custom-black min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Nicholas Shaffer</h1>
        <h2 className="text-2xl md:text-3xl mb-6">Professional Summary</h2>
        <p className="text-lg md:text-xl mb-8">{summary}</p>
      </div>
    </section>
  );
}