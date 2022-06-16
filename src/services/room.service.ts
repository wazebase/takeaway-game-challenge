import store from "../store";
import axios, {AxiosError, AxiosResponse} from "axios";
import {addRooms, setCurrentRoomName, setCurrentRoomType} from "../state/RoomSlice";
import {Room} from "../models/Room";
import {resetGameState} from "../state/GameSlice";
import {clearOpponentName, setOpponentName} from "../state/UserSlice";
import {joinNewRoom, leaveRoom} from "./socket.service";

const roomService = () => {
    const getRooms = async (): Promise<void> => {
        await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/rooms`).then((response: AxiosResponse<Room[]>) => {
            store.dispatch(addRooms(response.data));
        }).catch((errorResponse: AxiosError) => alert(errorResponse.message));
    }

    const joinRoom = (room: Room): void => {
        store.dispatch(resetGameState());
        store.dispatch(clearOpponentName());
        !!store.getState().roomInfo.currentRoomType && leaveRoom();
        room.type === 'cpu' && store.dispatch(setOpponentName('CPU'));
        setTimeout(() => {store.dispatch(setCurrentRoomType(room.type))}, 300);
        store.dispatch(setCurrentRoomName(room.name));
        joinNewRoom(room);
    };

    return {getRooms, joinRoom};
}

export const {getRooms, joinRoom} = roomService();
