import React from 'react';
import {useSelector} from "react-redux";
import {startPlaying} from "../../services/socket.service";
import {State} from "../../state/State";
import {RoomState} from "../../models/RoomState";
import {GameState} from "../../models/GameState";

const StartGameButton = () => {
    const roomInfo: RoomState = useSelector((state: State) => state.roomInfo);
    const gameInfo: GameState = useSelector((state: State) => state.gameInfo);
    if (gameInfo.isGameStarted) {
        return null;
    }
    return (
        <div className='p-3'>
            {roomInfo.currentRoomType &&
            <div className='d-flex justify-content-center'>
                {!roomInfo.isRoomReady && roomInfo.currentRoomType === 'cpu' ? (<p>This room is full. Please, use the other room</p>) :
                    !roomInfo.isRoomReady && roomInfo.currentRoomType === 'human' ? (<p> Waiting for other player to join the room</p>) :
                    (<button className='orange-button' onClick={startPlaying}>Start Game</button>)}
            </div>
            }
        </div>
    );
}

export default StartGameButton;
