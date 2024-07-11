import React from "react";
import { useState } from "react";
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

const API_KEY = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

function Assistant() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello! I'm Dish Discovery Assistant. How can I help you today?",
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
    const text = response.text();

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
          Need help cooking?
        </h1>
        <p className="font-semibold text-heading-color">
          Ask our Dish Discovery Assistant Below!
        </p>
        <div className="bg-white h-1/2 w-1/2 rounded-xl overflow-hidden p-4">
          <MainContainer>
            <ChatContainer>
              <ConversationHeader>
                <Avatar
                  name="Dish Discovery Assistant"
                  src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"
                  art="Dish Discovery Assistant Icon"
                />
                <ConversationHeader.Content
                  info="Active now"
                  userName="Dish Discovery Assistant"
                />
                <ConversationHeader.Actions>
                  <InfoButton />
                </ConversationHeader.Actions>
              </ConversationHeader>
              <MessageList
                style={{ height: "500px" }}
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="Dish Discovery Assistant is typing..." />
                  ) : null
                }
              >
                {messages.map((message, index) => {
                  return <Message key={index} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type a message..."
                onSend={sendMessage}
                attachButton={false}
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
