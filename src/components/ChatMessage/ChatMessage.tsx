import React from 'react';
import {IMessage} from "../../models/IMessage";
import './chat-message.css';

const ChatMessage = ({message}: {message: IMessage}) => (
    <div className='message-container py-1 mt-3'>
        <div className={`${message.messageClass} row align-items-center`}>
        <div className={`${message.iconClass} icon-container col-2 p-0`}></div>
            <p className='col-8 m-2 p-2 message'>{message.message}</p>
        </div>
</div>);

export default ChatMessage;
