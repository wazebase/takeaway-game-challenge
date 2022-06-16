import React from 'react';
import {sendNumber} from "../../services/socket.service";
import './number-button.css';
const NumberButton = ({number}: {number: number}) => {
    return (
        <div className='col-1 mx-3'>
        <button className='number-button round-button' onClick={() => sendNumber(number)}>{number}</button>
        </div>
    );
}

export default NumberButton;
