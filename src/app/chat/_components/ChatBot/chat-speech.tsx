import { Button } from '@/components/ui/button';
import useSpeechToText from '@/hooks/useSpeechToText';
import { Mic, MicOff } from 'lucide-react';
import { RefObject } from 'react';

interface ChatSpeechProps {
  textAreaRef: RefObject<HTMLTextAreaElement| null> ;
}

export const ChatSpeech = ({ textAreaRef }: ChatSpeechProps) => {
  const { listen, listening, stop, supported } = useSpeechToText();
  return (
    <Button
      className="bg-zinc-700 cursor-pointer absolute right-25 hover:opacity-80"
      onClick={() => {
        if (listening) {
          stop();
          return;
        }

        listen({ interimResults: true, lang: 'pt-BR' });
        textAreaRef.current?.focus();
      }}
      disabled={!supported}
      aria-label="Botão para enviar mensagem"
    >
      {listening ? (
        <Mic className="text-white" />
      ) : (
        <MicOff className="text-white" />
      )}
    </Button>
  );
};
