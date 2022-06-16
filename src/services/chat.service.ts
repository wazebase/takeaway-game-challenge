import store from "../store";
import {resetGameState, setCurrentNumber} from "../state/GameSlice";
import {setOpponentName, setUserId} from "../state/UserSlice";
import {addMessage, resetMessages} from "../state/MessageSlice";
import {Message} from "../models/Message";
import {RandomNumberResponse} from "../models/RandomNumberResponse";
import {MessageResponse} from "../models/MessageResponse";

export const chatService = () => {
    const clearChat = (): void => {
        store.dispatch(resetGameState());
        store.dispatch(resetMessages());
    }

    const sendEquationMessage = (number: number, selectedNumber: number, style: string): void => {
        const resultNumber: number = getEquationNumber(number, selectedNumber);
        sendMessage({message: `[(${selectedNumber} + ${number}) / 3] = ${resultNumber}`, messageClass: style});
    };

    const getEquationNumber = (number: number, selectedNumber: number): number => {
        return (number + selectedNumber) / 3;
    }

    const sendMessage = (message: Message): void => {
        setTimeout(() => {store.dispatch(addMessage(message))}, 200);
        scrollChatToBottom();
    }

    const setCurrentNumberAndSendMessage = (response: RandomNumberResponse, messageStyle: string): void => {
        store.dispatch(setCurrentNumber(response.number.toString()));
        sendMessage({message: response.number.toString(), messageClass: messageStyle});
    }

    const scrollChatToBottom = (): void => {
        setTimeout(() => {
            const numberSelect = document.querySelector('#number-select');
            const chat = document.getElementById('chat');
            numberSelect?.scrollIntoView(false);
            if(chat) chat.scrollTop += 30;
        }, 300);
    }

    const getMessageStyle = (response: RandomNumberResponse): [string, string] => {
        if (response.user && response?.user !== store.getState().userInfo.username) {
            return ['opponent-message', 'opponent-icon'];
        }
        return ['user-message', 'user-icon'];
    }

    const addMessageToStore = (response: MessageResponse): void => {
        let message;
        response?.socketId && store.dispatch(setUserId(response.socketId));
        if (response.user !== store.getState().userInfo.username) {
            store.dispatch(setOpponentName(response.user));
            message = `${response.user} ${response.message}`;
            sendMessage({message, messageClass: 'system-message'});
        }
        else {
            message = response.message;
            sendMessage({message, messageClass: 'system-message', iconClass: 'opponent-icon'});
        }
    }
    return {clearChat, sendMessage, sendEquationMessage, setCurrentNumberAndSendMessage, getMessageStyle, addMessageToStore};
}

export const {clearChat, sendMessage, sendEquationMessage, setCurrentNumberAndSendMessage, getMessageStyle, addMessageToStore} = chatService();
