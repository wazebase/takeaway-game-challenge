import {configureStore} from '@reduxjs/toolkit'
import userReducer from './state/UserSlice';
import roomReducer from './state/RoomSlice';
import gameReducer from './state/GameSlice';
import messageReducer from './state/MessageSlice';
const store =  configureStore({
    reducer: {
        userInfo: userReducer,
        roomInfo: roomReducer,
        gameInfo: gameReducer,
        messageInfo: messageReducer,
    },
});

export default store;
