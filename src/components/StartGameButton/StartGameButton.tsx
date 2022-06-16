import React from 'react';
import {useSelector} from "react-redux";
import {startPlaying} from "../../services/socket.service";
import {IState} from "../../state/IState";
import {IRoomState} from "../../models/IRoomState";
import {IGameState} from "../../models/IGameState";

const StartGameButton = () => {
    const roomInfo: IRoomState = useSelector((state: IState) => state.roomInfo);
    const gameInfo: IGameState = useSelector((state: IState) => state.gameInfo);
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
