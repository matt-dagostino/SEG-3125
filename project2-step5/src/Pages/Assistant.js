import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
  ConversationHeader,
  Avatar,
  InfoButton,
} from "@chatscope/chat-ui-kit-react";
import { useTranslation } from "react-i18next";

const API_KEY = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

function Assistant() {
  const [typing, setTyping] = useState(false);
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    {
      message:t('assistant.message'),
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const sendMessage = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setTyping(true);

    const prompt =
      "explain this instruction like you are a professional chef and do not include any formatting with ** or markdown stuff: " +
      message;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    const responseMessage = {
      message: text,
      sender: "ChatGPT",
      direction: "incoming",
    };

    setMessages([...newMessages, responseMessage]);

    setTyping(false);
  };

  return (
    <div>
      <Navbar location="assistant" />
      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color">
          {t('assistant.help')}
        </h1>
        <p className="font-semibold text-heading-color">
          {t('assistant.ask')}
        </p>
        <div className="bg-white h-1/2 w-1/2 rounded-xl overflow-hidden p-4">
          <MainContainer>
            <ChatContainer>
              <ConversationHeader>
                <Avatar
                  name="Dish Discovery Assistant"
                  src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"
                  alt="Dish Discovery Assistant Icon"
                  aria-label="Dish Discovery Assistant Icon"
                />
                <ConversationHeader.Content
                  info={t('assistant.status')}
                  userName={t('assistant.username')}
                  aria-label="Dish Discovery Assistant is active now"
                />
                <ConversationHeader.Actions>
                  <InfoButton aria-label="Information about Dish Discovery Assistant" />
                </ConversationHeader.Actions>
              </ConversationHeader>
              <MessageList
                style={{ height: "500px" }}
                typingIndicator={
                  typing ? (
                    <TypingIndicator content={t('assistant.typing')} aria-live="polite" />
                  ) : null
                }
              >
                {messages.map((message, index) => {
                  return (
                    <Message key={index} model={message} aria-live="polite" />
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder={t('assistant.type')}
                onSend={sendMessage}
                attachButton={false}
                aria-label="Type a message and press enter to send"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Assistant;
