import {Room} from "./Room";

export interface RoomState {
    rooms: Room[];
    currentRoomType: string;
    currentRoomName: string;
    isRoomReady: boolean;
}
