import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {IUserState} from "../models/IUserState";

export const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        username: '',
        userId: '',
        opponentName: '',
        isLoggedIn: false,
    },
    reducers: {
        resetUserState: (state: Draft<IUserState>) => {
            state.username = '';
            state.userId = '';
            state.opponentName = '';
            state.isLoggedIn = false;
        },
        addUserName: (state: Draft<IUserState>, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.isLoggedIn = true;
        },
        setOpponentName: (state: Draft<IUserState>, action: PayloadAction<string>) => {
            state.opponentName = action.payload;
        },
        setUserId: (state: Draft<IUserState>, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        clearOpponentName: (state: Draft<IUserState>) => {
            state.opponentName = '';
        },
        clearUserName: (state: Draft<IUserState>) => {
            state.username = '';
            state.isLoggedIn = false;
        },
    },
})

export const { addUserName, clearUserName, setOpponentName, clearOpponentName, setUserId, resetUserState} = userSlice.actions

export default userSlice.reducer
