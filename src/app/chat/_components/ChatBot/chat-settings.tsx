'use client';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Actions } from '@/enums/actions-enum';
import { useChatbot } from '@/hooks/useChatbot';
import { Bot, User } from 'lucide-react';

export const ChatSettings = () => {
  const { state, dispatch } = useChatbot();

  return (
    <DialogContent className="sm:max-w-[28rem]">
      <DialogHeader>
        <DialogTitle>Editar configurações do Chatbot</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-3">
        <span
          className="
          block text-sm font-semibold text-slate-500 mb-1
        "
        >
          Nome do Chatbot
        </span>
        <Input
          data-testid="chatbot-name-input"
          value={state.chatSettings.botName}
          onChange={(e) =>
            dispatch({
              type: Actions.SET_CHAT_SETTINGS_BOT_NAME,
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <span
          className="
          block text-sm font-semibold text-slate-500 mb-1
        "
        >
          Configurações do usuário
        </span>
        <div className="flex gap-3">
          <Button
            data-testid="chat-settings-user-green-btn"
            className={`bg-green-100  ${
              state.chatSettings.userMessageBg === 'bg-green-100 text-green-700'
                ? 'border-2 border-green-500'
                : ''
            }`}
            onClick={() =>
              dispatch({
                type: Actions.SET_CHAT_SETTINGS_USER_MESSAGE_BG,
                payload: 'bg-green-100 text-green-700',
              })
            }
          />
          <Button
            data-testid="chat-settings-user-slate-btn"
            className={`bg-slate-100  ${
              state.chatSettings.userMessageBg === 'bg-slate-100 text-slate-700'
                ? 'border-2 border-slate-500'
                : ''
            }`}
            onClick={() =>
              dispatch({
                type: Actions.SET_CHAT_SETTINGS_USER_MESSAGE_BG,
                payload: 'bg-slate-100 text-slate-700',
              })
            }
          />
        </div>
      </div>
      <div
        className={`flex gap-3 w-fit rounded p-2 items-start text-slate-500 ${state.chatSettings.userMessageBg}`}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex flex-col items-center">
          <User />
          <strong>Você</strong>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span
          className="
          block text-sm font-semibold text-slate-500 mb-1
        "
        >
          Configurações do Chatbot
        </span>
        <div className="flex gap-3">
          <Button
            data-testid="chat-settings-bot-green-btn"
            className={`bg-green-100  ${
              state.chatSettings.botMessageBg === 'bg-green-100 text-green-700'
                ? 'border-2 border-green-700'
                : ''
            }`}
            onClick={() =>
              dispatch({
                type: Actions.SET_CHAT_SETTINGS_BOT_MESSAGE_BG,
                payload: 'bg-green-100 text-green-700',
              })
            }
          />
          <Button
            data-testid="chat-settings-bot-slate-btn"
            className={`bg-slate-100  ${
              state.chatSettings.botMessageBg === 'bg-slate-100 text-slate-700'
                ? 'border-2 border-slate-500'
                : ''
            }`}
            onClick={() =>
              dispatch({
                type: Actions.SET_CHAT_SETTINGS_BOT_MESSAGE_BG,
                payload: 'bg-slate-100 text-slate-700',
              })
            }
          />
        </div>
      </div>
      <div
        className={`flex gap-3 w-fit rounded p-2 items-start text-green-700 ${state.chatSettings.botMessageBg} `}
      >
        <div className="flex flex-col items-center">
          <Bot />
          <strong>{state.chatSettings.botName}</strong>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </DialogContent>
  );
};
