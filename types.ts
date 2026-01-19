import React from 'react';

export interface PrincipleItem {
  title: string;
  icon: React.ReactNode;
  points: string[];
}

export interface QuizData {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface ScenarioItem {
  id: string;
  title: string;
  summary: string; // Brief description for index cards
  content: string; // Markdown-like string
  answer: string; // Markdown-like string
  link?: string;
  quiz: QuizData;
}

export interface LearningPoint {
  question: string;
  description: string;
}