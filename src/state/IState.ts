import {IUserState} from "../models/IUserState";
import {IRoomState} from "../models/IRoomState";
import {IGameState} from "../models/IGameState";
import {IMessageState} from "../models/IMessageState";


export interface IState {
    userInfo: IUserState;
    roomInfo: IRoomState;
    gameInfo: IGameState;
    messageInfo: IMessageState;
}
