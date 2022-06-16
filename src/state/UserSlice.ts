import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {UserState} from "../models/UserState";

export const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        username: '',
        userId: '',
        opponentName: '',
        isLoggedIn: false,
    },
    reducers: {
        resetUserState: (state: Draft<UserState>) => {
            state.username = '';
            state.userId = '';
            state.opponentName = '';
            state.isLoggedIn = false;
        },
        addUserName: (state: Draft<UserState>, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.isLoggedIn = true;
        },
        setOpponentName: (state: Draft<UserState>, action: PayloadAction<string>) => {
            state.opponentName = action.payload;
        },
        setUserId: (state: Draft<UserState>, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        clearOpponentName: (state: Draft<UserState>) => {
            state.opponentName = '';
        },
        clearUserName: (state: Draft<UserState>) => {
            state.username = '';
            state.isLoggedIn = false;
        },
    },
})

export const { addUserName, clearUserName, setOpponentName, clearOpponentName, setUserId, resetUserState} = userSlice.actions

export default userSlice.reducer
