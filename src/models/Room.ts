import {RoomType} from "../types/RoomType";

export interface Room {
    id: string;
    name: string;
    owner: string;
    type: RoomType;
}
