import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {Message} from "../models/Message";
import {MessageState} from "../models/MessageState";

export const gameSlice = createSlice({
    name: 'messageInfo',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state: Draft<MessageState>, action: PayloadAction<Message>) => {
            state.messages = [...state.messages, action.payload];
        },
        resetMessages: (state: Draft<MessageState>) => {
            state.messages = [];
        }
    },
});

export const { addMessage, resetMessages } = gameSlice.actions

export default gameSlice.reducer
