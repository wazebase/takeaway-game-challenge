import React, {useEffect} from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import MainScreen from "./screens/MainScreen/MainScreen";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import {addListeners} from "./services/socket.service";
import {getRooms} from "./services/room.service";
import {useSelector} from "react-redux";
import {State} from "./state/State";
function ChatGameApp() {
    const isLoggedIn: boolean = useSelector((state: State) => state.userInfo.isLoggedIn);
    useEffect( () => {
        getRooms();
        addListeners();
    }, []);
  return (
    <div className="App h-100">
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/main" element={
              <ProtectedRoute isLoggedIn = {isLoggedIn}>
              <MainScreen />
              </ProtectedRoute>
          }/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default ChatGameApp;
