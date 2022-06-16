import store from '../store';
import {addUserName, resetUserState} from "../state/UserSlice";
import {IRoom} from "../models/IRoom";
import {resetRoomState, setRoomReady} from "../state/RoomSlice";
import {finishGame, resetGameState, setMyTurn, startGame} from "../state/GameSlice";
import {IRandomNumberResponse} from "../models/IRandomNumberResponse";
import {resetMessages} from "../state/MessageSlice";
import {
    addMessageToStore,
    getMessageStyle,
    sendEquationMessage,
    sendMessage,
    setCurrentNumberAndSendMessage
} from "./chat.service";
import {IActivateTurnResponse} from "../models/IActivateTurnResponse";
import {IGameOverResponse} from "../models/IGameOverResponse";
import {IOnReadyResponse} from "../models/IOnReadyResponse";
import {IMessageResponse} from "../models/IMessageResponse";
const io = require("socket.io-client/dist/socket.io");

const socketService = () => {
    const stateMap: Map<string, boolean> = new Map<string, boolean>([
        ['wait', false],
        ['play', true],
    ]);
    const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT);
    const login = (username: string): void => {
        socket.emit('login', {username});
        store.dispatch(addUserName(username));
    };

    const logout = (): void => {
        socket.emit('disconnect');
        store.dispatch(resetGameState());
        store.dispatch(resetMessages());
        store.dispatch(resetRoomState());
        store.dispatch(resetUserState());
    }

    const leaveRoom = (): void => {
        socket.emit('leaveRoom');
    }

    const joinNewRoom = (room: IRoom): void => {
        socket.emit('joinRoom', {username: store.getState().userInfo.username, room: room.name, roomType: room.type});
    }

    const startPlaying = (): void => {
        socket.emit('letsPlay');
        store.dispatch(startGame());
    };

    const sendNumber = (selectedNumber: number): void => {
        socket.emit('sendNumber', {number: parseInt(store.getState().gameInfo.currentNumber, 10), selectedNumber});
    };

    const handleRandomNumberResponse = (response: IRandomNumberResponse): void => {
        const [currentUserStyle, currentIconStyle]: [string, string] = getMessageStyle(response);
        if (response.isFirst) {
            handleFirstNumber(response, currentUserStyle);
            return;
        }
        sendMessage({message: response.selectedNumber.toString(), messageClass: currentUserStyle, iconClass: currentIconStyle});
        handleResult(response, currentUserStyle);
    }

    const handleFirstNumber = (response: IRandomNumberResponse, messageClass: string): void => {
        const isMyTurn: boolean = !!store.getState().userInfo.opponentName;
        setTimeout(()=> {store.dispatch(setMyTurn(isMyTurn))}, 300);
        setCurrentNumberAndSendMessage(response, messageClass);
        store.dispatch(startGame());
    }

    const handleResult = (response: IRandomNumberResponse, messageClass: string): void => {
        if (response.isCorrectResult) {
            sendEquationMessage(response.number * 3 - response.selectedNumber, response.selectedNumber, messageClass);
            setCurrentNumberAndSendMessage(response, messageClass);
            return;
        }
        sendMessage({message: `${response.selectedNumber + response.number} % 3 != 0`, messageClass});
        setCurrentNumberAndSendMessage(response, messageClass);
    }

    const handleGameOver = (response: IGameOverResponse): void => {
        const isWinner: boolean = store.getState().userInfo.username === response.user;
        store.dispatch(finishGame(isWinner));
    }

    const handleTurnActivation = (response: IActivateTurnResponse): void => {
        const isCurrentUser: boolean = response.user === store.getState().userInfo.userId;
        const isPlayState: boolean | undefined = stateMap.get(response.state);
        const isMyTurn: boolean = (isCurrentUser && isPlayState) || (!isCurrentUser && !isPlayState);
        setTimeout(()=> {store.dispatch(setMyTurn(isMyTurn))}, 300);
    }

    const addListeners = () => {
        socket.on('message', (arg: IMessageResponse) => addMessageToStore(arg));
        socket.on('error', (arg: IMessageResponse) => sendMessage({message: arg.message, messageClass: 'system-message'}));
        socket.on('onReady', (arg: IOnReadyResponse) => store.dispatch(setRoomReady(arg.state)));
        socket.on('activateYourTurn', (arg: IActivateTurnResponse) => handleTurnActivation(arg));
        socket.on('gameOver', (arg: IGameOverResponse) => handleGameOver(arg));
        socket.on('randomNumber', (arg: IRandomNumberResponse) => handleRandomNumberResponse(arg));
    };
    return {login, addListeners, joinNewRoom, leaveRoom, startPlaying, sendNumber, logout};
};

export const {login, addListeners, joinNewRoom, leaveRoom, startPlaying, sendNumber, logout} = socketService();
