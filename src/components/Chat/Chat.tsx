import React from 'react';
import StartGameButton from "../StartGameButton/StartGameButton";
import NumberSelect from "../NumberSelect/NumberSelect";
import ChatStream from "../ChatStream/ChatStream";
import './chat.css';
const Chat = () => (
        <div className='col-8 bg-white chat' id='chat'>
            <ChatStream />
            <StartGameButton />
            <NumberSelect />
        </div>
    );

export default Chat;
