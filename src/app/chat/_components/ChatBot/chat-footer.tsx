'use client';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Actions } from '@/enums/actions-enum';
import { useChatbot } from '@/hooks/useChatbot';

import { useSpeechToText } from '@/hooks/useSpeechToText';
import { Send } from 'lucide-react';
import { useRef } from 'react';
import { ChatSpeech } from './chat-speech';

export const ChatFooter = () => {
  const { state, dispatch, sendMessage } = useChatbot();
  const { listening, stop } = useSpeechToText();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <CardFooter className="space-x-2 relative">
      <Textarea
        ref={textAreaRef}
        value={state.input}
        onChange={(e) =>
          dispatch({ type: Actions.SET_INPUT, payload: e.target.value })
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey && !state.loading) {
            e.preventDefault();
            stop();
            sendMessage();
          }
        }}
        placeholder="Como posso te ajudar?"
        className="resize-none w-full overflow-y-auto m-0 dark:bg-slate-100 text-black max-h-[25dvh]"
        aria-label="Campo de texto para enviar mensagem"
      />
      <Button
        type="submit"
        className="bg-zinc-700 cursor-pointer absolute right-10 hover:opacity-80"
        onClick={() => {
          if (listening) {
            stop();
          }
          sendMessage();
        }}
        disabled={!state.input || state.loading}
        aria-label="Botão para enviar mensagem"
      >
        <Send className="text-white" />
      </Button>
      <ChatSpeech textAreaRef={textAreaRef} />
    </CardFooter>
  );
};
