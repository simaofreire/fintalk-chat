'use client';

import botResponses from '@/data/bot-responses.json';
import { Actions } from '@/enums/actions-enum';
import { Action, Messages, State } from '@/types/types';
import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

export const initialState = {
  messages: [] as Messages[],
  input: '',
  userId: '',
  loading: false,
  chatSettings: {
    chatSettingsOpen: false,
    userMessageBg: 'bg-slate-100 text-slate-500',
    botMessageBg: 'bg-green-100 text-green-500',
    botName: 'FinBot',
  },
};

interface ChatbotContextProps {
  children: ReactNode;
}

export interface ChatbotContextData {
  state: State;
  dispatch: (action: Action) => void;
  sendMessage: () => void;
  chatEndRef: RefObject<HTMLDivElement | null>;
}

export const ChatbotContext = createContext<ChatbotContextData>(
  {} as ChatbotContextData
);

export const ChatbotProvider = ({ children }: ChatbotContextProps) => {
  const reducer = useCallback((state: State, action: Action): State => {
    switch (action.type) {
      case Actions.SET_MESSAGES:
        return { ...state, messages: [...state.messages, action.payload] };
      case Actions.LOAD_DB_MESSAGES:
        return { ...state, messages: action.payload };
      case Actions.SET_INPUT:
        return { ...state, input: action.payload };
      case Actions.SET_USER_ID:
        return { ...state, userId: action.payload };
      case Actions.SET_LOADING:
        return { ...state, loading: action.payload };
      case Actions.SET_CHAT_SETTINGS_OPEN:
        return {
          ...state,
          chatSettings: {
            ...state.chatSettings,
            chatSettingsOpen: action.payload,
          },
        };
      case Actions.SET_CHAT_SETTINGS_USER_MESSAGE_BG:
        localStorage.setItem('userMessageBg', action.payload);
        return {
          ...state,
          chatSettings: {
            ...state.chatSettings,
            userMessageBg: action.payload,
          },
        };
      case Actions.SET_CHAT_SETTINGS_BOT_MESSAGE_BG:
        localStorage.setItem('botMessageBg', action.payload);
        return {
          ...state,
          chatSettings: { ...state.chatSettings, botMessageBg: action.payload },
        };

      case Actions.SET_CHAT_SETTINGS_BOT_NAME:
        localStorage.setItem('botName', action.payload);
        return {
          ...state,
          chatSettings: { ...state.chatSettings, botName: action.payload },
        };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatHistory = localStorage.getItem('chatHistory');
    const userMessageBg =
      localStorage.getItem('userMessageBg') ??
      initialState.chatSettings.userMessageBg;
    const botMessageBg =
      localStorage.getItem('botMessageBg') ??
      initialState.chatSettings.botMessageBg;
    const botName =
      localStorage.getItem('botName') ?? initialState.chatSettings.botName;
    const userId = localStorage.getItem('userId') ?? 'default';

    dispatch({
      type: Actions.LOAD_DB_MESSAGES,
      payload: chatHistory ? JSON.parse(chatHistory) : [],
    });
    dispatch({ type: Actions.SET_USER_ID, payload: userId });
    dispatch({
      type: Actions.SET_CHAT_SETTINGS_USER_MESSAGE_BG,
      payload: userMessageBg,
    });
    dispatch({
      type: Actions.SET_CHAT_SETTINGS_BOT_MESSAGE_BG,
      payload: botMessageBg,
    });
    dispatch({ type: Actions.SET_CHAT_SETTINGS_BOT_NAME, payload: botName });
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(state.messages));
  }, [state.messages]);

  const sendMessage = useCallback(() => {
    if (!state.input?.trim()) return;

    dispatch({ type: Actions.SET_LOADING, payload: true });

    const userMessage = {
      sender: 'user',
      text: state.input,
      id: crypto.randomUUID(),
      userId: state.userId,
    };

    dispatch({ type: Actions.SET_MESSAGES, payload: userMessage });
    dispatch({ type: Actions.SET_INPUT, payload: '' });

    setTimeout(() => {
      const botResponsesForUser =
        botResponses[state.userId as keyof typeof botResponses] ??
        botResponses['default'];

      const botMessage = {
        sender: 'bot',
        text: botResponsesForUser[
          Math.floor(Math.random() * botResponsesForUser.length)
        ],
        id: crypto.randomUUID(),
        userId: state.userId,
      };

      dispatch({ type: Actions.SET_MESSAGES, payload: botMessage });
      dispatch({ type: Actions.SET_LOADING, payload: false });
    }, 1000);
  }, [state.input, state.userId]);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
      sendMessage,
      chatEndRef,
    }),
    [state, dispatch, sendMessage]
  );

  return (
    <ChatbotContext.Provider value={contextValue}>
      {children}
    </ChatbotContext.Provider>
  );
};
