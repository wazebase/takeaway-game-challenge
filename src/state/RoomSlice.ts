import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {IRoomState} from "../models/IRoomState";
import {IRoom} from "../models/IRoom";

export const roomSlice = createSlice({
    name: 'roomInfo',
    initialState: {
        rooms: [],
        currentRoomType: '',
        currentRoomName: '',
        isRoomReady: false,

    },
    reducers: {
        resetRoomState: (state: Draft<IRoomState>) => {
            state.currentRoomType = '';
            state.currentRoomName = '';
            state.isRoomReady = false;
        },
        addRooms: (state: Draft<IRoomState>, action: PayloadAction<IRoom[]>) => {
            state.rooms = action.payload;
        },
        setCurrentRoomType: (state: Draft<IRoomState>, action: PayloadAction<string>) => {
            state.currentRoomType = action.payload;
        },
        setCurrentRoomName: (state: Draft<IRoomState>, action: PayloadAction<string>) => {
            state.currentRoomName = action.payload;
        },
        setRoomReady: (state: Draft<IRoomState>, action: PayloadAction<boolean>) => {
            state.isRoomReady = action.payload;
        }
    },
})

export const { addRooms, setCurrentRoomType, setRoomReady, setCurrentRoomName, resetRoomState} = roomSlice.actions

export default roomSlice.reducer
