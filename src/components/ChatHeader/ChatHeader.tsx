import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../../services/socket.service";
import './chat-header.css';
import logo from '../../assets/icons/takeaway-logo.png';
import {IUserState} from "../../models/IUserState";
import {IState} from "../../state/IState";
import {IGameState} from "../../models/IGameState";
const ChatHeader = () => {
    const userInfo: IUserState = useSelector((state: IState) => state.userInfo);
    const gameInfo: IGameState = useSelector((state: IState) => state.gameInfo);
    const navigate = useNavigate();

    const getBackToLogin = () => {
        logout();
        navigate('/');
    }

    return (
        <div className='row border-1 card-header chat-header text-white px-3'>
            <div className='col-1 d-flex'>
                <div className='mx-3'>
                <img src={logo} alt='takeaway-logo'/>
                </div>
            </div>
            <div className='col-9 d-flex'>
            {gameInfo.isGameStarted && <div>
                <h5 className='fw-bold m-0'>Playing with {userInfo.opponentName? userInfo.opponentName : 'human being'}</h5>
                <p className='p-0 m-0'>Win the game or win the job</p>
            </div>
            }
            </div>
            <div className='col-2 d-flex align-content-center justify-content-end'>
                <button className='orange-button px-3' onClick={getBackToLogin}>Logout</button>
            </div>
        </div>
    );
}

export default ChatHeader;
