'use client'
import { Actions } from '@/enums/actions-enum';
import { useChatbot } from '@/hooks/useChatbot';
import { createContext, ReactNode, useMemo } from 'react';
import { ListenOptions, useSpeechRecognition } from 'react-speech-kit';

interface SpeechContextProps {
  children: ReactNode;
}

export interface SpeechContextData {
  listen: (options: ListenOptions) => void;
  listening: boolean;
  stop: () => void;
  supported: boolean;
}

export const SpeechToTextContext = createContext<SpeechContextData>(
  {} as SpeechContextData
);

export const SpeechToTextProvider = ({ children }: SpeechContextProps) => {
  const { dispatch } = useChatbot();

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: (result) => {
      dispatch({ type: Actions.SET_INPUT, payload: result.toString() });
    },
  });

  const contextValue = useMemo(() => {
    return {
      listen,
      listening,
      stop,
      supported,
    };
  }, [listen, listening, stop, supported]);

  return (
    <SpeechToTextContext.Provider value={contextValue}>
      {children}
    </SpeechToTextContext.Provider>
  );
};
