import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {RoomState} from "../models/RoomState";
import {Room} from "../models/Room";

export const roomSlice = createSlice({
    name: 'roomInfo',
    initialState: {
        rooms: [],
        currentRoomType: '',
        currentRoomName: '',
        isRoomReady: false,

    },
    reducers: {
        resetRoomState: (state: Draft<RoomState>) => {
            state.currentRoomType = '';
            state.currentRoomName = '';
            state.isRoomReady = false;
        },
        addRooms: (state: Draft<RoomState>, action: PayloadAction<Room[]>) => {
            state.rooms = action.payload;
        },
        setCurrentRoomType: (state: Draft<RoomState>, action: PayloadAction<string>) => {
            state.currentRoomType = action.payload;
        },
        setCurrentRoomName: (state: Draft<RoomState>, action: PayloadAction<string>) => {
            state.currentRoomName = action.payload;
        },
        setRoomReady: (state: Draft<RoomState>, action: PayloadAction<boolean>) => {
            state.isRoomReady = action.payload;
        }
    },
})

export const { addRooms, setCurrentRoomType, setRoomReady, setCurrentRoomName, resetRoomState} = roomSlice.actions

export default roomSlice.reducer
