import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useSpeechToText from '@/hooks/useSpeechToText';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Mic, MicOff } from 'lucide-react';
import { RefObject } from 'react';

interface ChatSpeechProps {
  textAreaRef: RefObject<HTMLTextAreaElement | null>;
}

export const ChatSpeech = ({ textAreaRef }: ChatSpeechProps) => {
  const { listen, listening, stop, supported } = useSpeechToText();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={`bg-zinc-700 !cursor-pointer absolute right-25 hover:opacity-80 ${
              !supported ? '!cursor-not-allowed' : ''
            }`}
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
        </TooltipTrigger>
        <TooltipContent className={`${!supported ? 'bg-red-500' : ''}`}>
          {supported
            ? listening
              ? 'Clique para deixar mudo'
              : 'Clique para falar'
            : 'Navegador não suportado'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
