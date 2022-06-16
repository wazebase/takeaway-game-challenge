import React from 'react';
import ChatRoom from "../ChatRoom/ChatRoom";
import {useSelector} from "react-redux";
import {IState} from "../../state/IState";
import {IRoom} from "../../models/IRoom";

const RoomList = ()  => {
    const rooms: IRoom[] = useSelector((state: IState) => state.roomInfo.rooms);
    return (
        <div className="col-3">
            <div className='d-flex mx-3 my-3'>
            <p className='fw-bold'>Choose you game room</p>
            </div>
            <div className='d-flex flex-column mx-3 my-3'>
            {rooms.map((room: IRoom, i: number) => <ChatRoom room = {room} key = {i}/>)}
            </div>
        </div>
    );
}

export default RoomList;
