import {IRoom} from "./IRoom";

export interface IRoomState {
    rooms: IRoom[];
    currentRoomType: string;
    currentRoomName: string;
    isRoomReady: boolean;
}
