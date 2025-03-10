import { initialState } from '@/contexts/chatbot-context';
import { Actions } from '@/enums/actions-enum';

export type Messages = {
  sender: string;
  text: string;
  id: string;
  userId: string;
};

export type State = typeof initialState;

export type Action =
  | { type: Actions.SET_MESSAGES; payload: Messages }
  | { type: Actions.LOAD_DB_MESSAGES; payload: Messages[] }
  | { type: Actions.SET_INPUT; payload: string }
  | { type: Actions.SET_USER_ID; payload: string }
  | { type: Actions.SET_LOADING; payload: boolean }
  | { type: Actions.SET_CHAT_SETTINGS_OPEN; payload: boolean }
  | { type: Actions.SET_CHAT_SETTINGS_USER_MESSAGE_BG; payload: string }
  | { type: Actions.SET_CHAT_SETTINGS_BOT_MESSAGE_BG; payload: string }
  | { type: Actions.SET_CHAT_SETTINGS_USER_MESSAGE_COLOR; payload: string }
  | { type: Actions.SET_CHAT_SETTINGS_BOT_MESSAGE_COLOR; payload: string }
  | { type: Actions.SET_CHAT_SETTINGS_BOT_NAME; payload: string }

