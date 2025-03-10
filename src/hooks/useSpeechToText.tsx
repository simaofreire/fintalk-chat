'use client';
import { Actions } from '@/enums/actions-enum';
import { useSpeechRecognition } from 'react-speech-kit';
import { useChatbot } from './useChatbot';

const useSpeechToText = () => {
  const { dispatch } = useChatbot();

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: (result) => {
      dispatch({ type: Actions.SET_INPUT, payload: result.toString() });
    },
  });

  return {
    listening,
    supported,
    listen,
    stop,
  };
};

export default useSpeechToText;
