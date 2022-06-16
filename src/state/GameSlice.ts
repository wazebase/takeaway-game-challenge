import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {GameState} from "../models/GameState";

export const gameSlice = createSlice({
    name: 'gameInfo',
    initialState: {
        isGameStarted: false,
        isGameFinished: false,
        isWinner: false,
        currentNumber: '',
        isFirst: false,
        isMyTurn: false,
    },
    reducers: {
        resetGameState: (state: Draft<GameState>) => {
            state.isGameFinished = false;
            state.isGameStarted = false;
            state.isWinner = false;
            state.isFirst = false;
            state.isMyTurn = false;
            state.currentNumber = '';
        },
        startGame: (state: Draft<GameState>) => {
            state.isGameStarted = true;
        },
        finishGame: (state: Draft<GameState>, action: PayloadAction<boolean>) => {
            state.isGameStarted = false;
            state.isGameFinished = true;
            state.isWinner = action.payload;
        },
        setMyTurn: (state: Draft<GameState>, action: PayloadAction<boolean>) => {
            state.isMyTurn = action.payload;
        },
        setCurrentNumber: (state: Draft<GameState>, action: PayloadAction<string>) => {
            state.currentNumber = action.payload;
        },
    },
});

export const { startGame, finishGame, setCurrentNumber, setMyTurn, resetGameState } = gameSlice.actions

export default gameSlice.reducer
