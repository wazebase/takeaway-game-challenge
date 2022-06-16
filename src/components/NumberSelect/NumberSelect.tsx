import React from 'react';
import NumberButton from "../NumberButton/NumberButton";
import {useSelector} from "react-redux";
import {IState} from "../../state/IState";

const NumberSelect = () => {
    const isMyTurn: boolean = useSelector((state: IState) => state.gameInfo.isMyTurn);
    return (
        <div id='number-select'
             className='d-flex justify-content-center my-3'
             style={isMyTurn ? {visibility: 'visible'}:{visibility: 'hidden'}}>
                <NumberButton number = {-1}/>
                <NumberButton number = {0}/>
                <NumberButton number = {1}/>
        </div>
    );
}

export default NumberSelect;
