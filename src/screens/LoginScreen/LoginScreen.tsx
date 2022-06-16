import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from '../../services/socket.service';

function LoginScreen() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const saveUsernameAndRedirect = () => {
        login(username);
        navigate('/main');
    };
    return (
            <div className='d-flex flex-column mt-3 p-3'>
                <div className='d-flex justify-content-center'>
                    <h4>Welcome to the game. Please, login first</h4>
                </div>
                <div className='mt-3 d-flex justify-content-center'>
            <input className='w-25' value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
            <button disabled={username.length === 0} onClick={saveUsernameAndRedirect}>Login</button>
                </div>
            </div>
    );
}

export default LoginScreen;
