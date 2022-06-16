import React from 'react';
import Modal from 'react-modal';
import {useSelector} from "react-redux";
import store from "../../store";
import {addMessage} from "../../state/MessageSlice";
import winIcon from '../../assets/icons/win.png';
import loseIcon from '../../assets/icons/lose.png';
import {clearChat} from "../../services/chat.service";
import {IState} from "../../state/IState";
import {IGameState} from "../../models/IGameState";
import {IUserState} from "../../models/IUserState";
Modal.setAppElement('#root');
const GameResultModal = () => {
    const gameInfo: IGameState = useSelector((state: IState) => state.gameInfo);
    const userInfo: IUserState = useSelector((state: IState) => state.userInfo);
    const message: string = gameInfo.isWinner ? 'You won' : 'You lost';
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const closeModal = (): void => {
        clearChat();
        const opponentName: string = userInfo.opponentName;
        store.dispatch(addMessage({message: `${message} playing against ${opponentName? opponentName : 'human being'}`, messageClass: 'system-message'}));
    }

    return (
        <div className='d-flex align-content-center justify-content-center'>
            <Modal
                isOpen={gameInfo.isGameFinished}
                onRequestClose={closeModal}
                style={customStyles}>
                <img src={gameInfo.isWinner? winIcon : loseIcon} alt = 'result-icon'/>
                <h3 className='text-center'>{message}!</h3>
                <div className='row p-3'><button className='orange-button m-0' onClick={closeModal}>close</button></div>
            </Modal>
        </div>
    );
}

export default GameResultModal;
