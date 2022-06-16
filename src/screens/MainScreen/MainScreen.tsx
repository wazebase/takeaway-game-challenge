import React from "react";
import RoomList from "../../components/RoomList/RoomList";
import Chat from "../../components/Chat/Chat";
import GameResultModal from "../../components/GameResultModal/GameResultModal";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import './main-screen.css';
import ChatFooter from "../../components/ChatFooter/ChatFooter";
const MainScreen = () => {
    return (
        <div className='card-body p-0 grey-background h-100 m-0'>
            <ChatHeader />
            <div className='row'>
            <RoomList />
            <Chat />
            </div>
            <GameResultModal />
            <ChatFooter />
        </div>
    );
}

export default MainScreen;
