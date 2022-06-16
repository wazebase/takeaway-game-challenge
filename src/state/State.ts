import {UserState} from "../models/UserState";
import {RoomState} from "../models/RoomState";
import {GameState} from "../models/GameState";
import {MessageState} from "../models/MessageState";


export interface State {
    userInfo: UserState;
    roomInfo: RoomState;
    gameInfo: GameState;
    messageInfo: MessageState;
}
