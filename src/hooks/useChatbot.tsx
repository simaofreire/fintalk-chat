import { ChatbotContext, ChatbotContextData } from '@/contexts/chatbot-context';
import { useContext } from 'react';

export const useChatbot = (): ChatbotContextData => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};
