import { Chatbot } from './_components/ChatBot';

const Chat = () => {
  return (
    <Chatbot.Root>
      <Chatbot.Header />
      <Chatbot.Messages />
      <Chatbot.Footer />
      <Chatbot.Settings />
    </Chatbot.Root>
  );
};

export default Chat;
