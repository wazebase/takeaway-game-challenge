import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import store from "../../store";
import {addMessage} from "../../state/MessageSlice";
import {clearOpponentName} from "../../state/UserSlice";
import rightArrow from '../../assets/icons/right-arrow.svg';
import './room.css';
import {joinRoom} from "../../services/room.service";
import {Room} from "../../models/Room";
import {State} from "../../state/State";
import {RoomState} from "../../models/RoomState";

const ChatRoom = ({room}: {room: Room }) => {
    const roomInfo: RoomState = useSelector((state: State) => state.roomInfo);
    const [styles, setStyles] = useState<React.CSSProperties[]>([{}, {}]);
    const selectedArrowStyle: React.CSSProperties = {filter: 'invert(0%) sepia(0%) brightness(614%) contrast(314%)'};
    const selectedBoxStyle: React.CSSProperties = {backgroundColor: '#1574F5', color: 'white'};

    useEffect(() => {
        if (room.name !== roomInfo.currentRoomName) {
            setStyles([{}, {}]);
        }
    },[roomInfo.currentRoomName]);

    const joinNewRoom = (room: Room): void => {
        if (!!roomInfo.currentRoomType) {
            if (!window.confirm(`Do you want to leave ${roomInfo.currentRoomName}?`)) {
                return;
            }
            store.dispatch(clearOpponentName());
            store.dispatch(addMessage({message: `You have left room ${roomInfo.currentRoomName}`, messageClass: 'system-message'}));
        }
        setStyles([selectedBoxStyle, selectedArrowStyle]);
        joinRoom(room);
    };

    return(
        <div className='d-flex p-4 col room-box' style={styles[0]} onClick={() => joinNewRoom(room)}>
            <div className='text-center fw-bold py-3'><p className='m-0 d-inline-flex'>{room.name}</p></div>
            <div className='col d-flex justify-content-end'>
                <div>
                <img className='arrow' style={styles[1]} src={rightArrow} alt='arrow'/>
                </div>
            </div>
        </div>);
}

export default ChatRoom;
