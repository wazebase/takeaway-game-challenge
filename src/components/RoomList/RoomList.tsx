import React from 'react';
import ChatRoom from "../ChatRoom/ChatRoom";
import {useSelector} from "react-redux";
import {State} from "../../state/State";
import {Room} from "../../models/Room";

const RoomList = ()  => {
    const rooms: Room[] = useSelector((state: State) => state.roomInfo.rooms);
    return (
        <div className="col-3">
            <div className='d-flex mx-3 my-3'>
            <p className='fw-bold'>Choose you game room</p>
            </div>
            <div className='d-flex flex-column mx-3 my-3'>
            {rooms.map((room: Room, i: number) => <ChatRoom room = {room} key = {i}/>)}
            </div>
        </div>
    );
}

export default RoomList;
