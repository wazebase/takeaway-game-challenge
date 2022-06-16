import React from 'react';
import {useSelector} from "react-redux";
import {IMessage} from "../../models/IMessage";
import ChatMessage from "../ChatMessage/ChatMessage";
import  './chat-stream.css';
import {IState} from "../../state/IState";
const ChatStream = () => {
    const messages: IMessage[] = useSelector((state: IState) => state.messageInfo.messages);
    return (
        <div className='p-3 chat-stream'>
            {messages.map((message: IMessage, i: number) => <ChatMessage message={message} key = {i}/>)}
        </div>
    )
};

export default ChatStream;
