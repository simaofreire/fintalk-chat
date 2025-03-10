'use client';
import { CardContent } from '@/components/ui/card';
import { useChatbot } from '@/hooks/useChatbot';
import { Bot, User } from 'lucide-react';
import { useEffect } from 'react';

export const ChatMessages = () => {
  const { state, chatEndRef } = useChatbot();

  useEffect(() => {
    chatEndRef.current?.scrollTo({
      top: chatEndRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [state.messages, chatEndRef]);

  return (
    <CardContent
      className="space-y-4 overflow-y-auto my-1 pb-1"
      ref={chatEndRef}
    >
      {state.messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex w-full text-sm ${
            msg.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`flex gap-3 w-fit rounded p-2 items-start ${
              msg.sender === 'user'
                ? `${state.chatSettings.userMessageBg}`
                : `${state.chatSettings.botMessageBg}`
            } `}
          >
            {msg.sender === 'bot' && (
              <div className="flex flex-col items-center">
                <Bot />
                <strong>{state.chatSettings.botName}</strong>
              </div>
            )}
            <p className="leading-relaxed break-all">{msg.text}</p>
            {msg.sender === 'user' && (
              <div className="flex flex-col items-center">
                <User />
                <strong>Você</strong>
              </div>
            )}
          </div>
        </div>
      ))}
    </CardContent>
  );
};
