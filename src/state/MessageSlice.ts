import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {IMessage} from "../models/IMessage";
import {IMessageState} from "../models/IMessageState";

export const gameSlice = createSlice({
    name: 'messageInfo',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state: Draft<IMessageState>, action: PayloadAction<IMessage>) => {
            state.messages = [...state.messages, action.payload];
        },
        resetMessages: (state: Draft<IMessageState>) => {
            state.messages = [];
        }
    },
});

export const { addMessage, resetMessages } = gameSlice.actions

export default gameSlice.reducer
