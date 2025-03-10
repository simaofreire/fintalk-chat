'use client';
import { SpeechToTextContext } from '@/contexts/speech-context';
import { useContext } from 'react';

export const useSpeechToText = () => {
  const context = useContext(SpeechToTextContext);
  if (!context) {
    throw new Error('useSpeechToText must be used within a SpeechProvider');
  }
  return context;
};


