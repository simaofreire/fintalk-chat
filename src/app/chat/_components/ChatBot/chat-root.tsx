'use client';
import { Card } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
import { Actions } from '@/enums/actions-enum';
import { useChatbot } from '@/hooks/useChatbot';
import { ReactNode } from 'react';

interface ChatRootProps {
  children: ReactNode;
}

export const ChatRoot = ({ children }: ChatRootProps) => {
  const { state, dispatch } = useChatbot();

  return (
    <Card className="gap-1 w-full h-[calc(100dvh-6rem)] rounded-none grid grid-rows-[min-content_1fr_min-content] sm:mt-10 sm:max-w-[28rem] sm:max-h-[45rem] sm:rounded-xl">
      <Dialog
        open={state.chatSettings.chatSettingsOpen}
        onOpenChange={() =>
          dispatch({
            type: Actions.SET_CHAT_SETTINGS_OPEN,
            payload: !state.chatSettings.chatSettingsOpen,
          })
        }
      >
        {children}
      </Dialog>
    </Card>
  );
};
