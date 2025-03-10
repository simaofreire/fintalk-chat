'use client';
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { DialogTrigger } from '@/components/ui/dialog';
import { Actions } from '@/enums/actions-enum';
import { useChatbot } from '@/hooks/useChatbot';

import { Bot, Settings } from 'lucide-react';

export const ChatHeader = () => {
  const { state, dispatch } = useChatbot();

  return (
    <CardHeader className="flex flex-row justify-between items-center border-b pb-5">
      <CardTitle className="flex flex-col items-center gap-2">
        <Bot /> {state.chatSettings.botName}
      </CardTitle>
      <DialogTrigger asChild>
        <Button
          onClick={() =>
            dispatch({
              type: Actions.SET_CHAT_SETTINGS_OPEN,
              payload: !state.chatSettings.chatSettingsOpen,
            })
          }
          className="bg-zinc-700 cursor-pointer right-10 hover:opacity-80"
          aria-label="Botão para abrir configurações do chat"
        >
          <Settings />
        </Button>
      </DialogTrigger>
    </CardHeader>
  );
};
