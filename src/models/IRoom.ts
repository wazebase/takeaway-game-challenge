import {RoomType} from "../types/RoomType";

export interface IRoom {
    id: string;
    name: string;
    owner: string;
    type: RoomType;
}
