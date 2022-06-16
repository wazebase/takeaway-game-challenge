import React from 'react';
import {useSelector} from "react-redux";
import {Message} from "../../models/Message";
import ChatMessage from "../ChatMessage/ChatMessage";
import  './chat-stream.css';
import {State} from "../../state/State";
const ChatStream = () => {
    const messages: Message[] = useSelector((state: State) => state.messageInfo.messages);
    return (
        <div className='p-3 chat-stream'>
            {messages.map((message: Message, i: number) => <ChatMessage message={message} key = {i}/>)}
        </div>
    )
};

export default ChatStream;
