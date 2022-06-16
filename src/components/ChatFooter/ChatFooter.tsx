import React from 'react';
import './chat-footer.css';
import whiteIcon from '../../assets/icons/takeaway-white.png';
const ChatFooter = () => {
    return (
        <div className='row card-footer chat-footer m-0 align-content-end p-3'>
            <div className='col-4 d-flex'>
                <div className='mt-1 mx-2'>
                <img src={whiteIcon} alt='takeaway-white-logo'/>
                </div>
                <div className='mt-2 d-flex'>
                    <h5 className='mx-2 my-0 fw-bold'>JUST EAT</h5>
                    <div className='d-flex takeaway'>
                    <p className='my-0 fw-bold'>Takeaway</p>
                    <span>.com</span>
                    </div>
                </div>
            </div>
            <div className='col-5'></div>
            <div className='col-3 d-flex mt-2'>
                <p className='mx-3'>Cookie statement</p>
                <p className='fw-light'>© 2021 Takeaway.com</p>
            </div>
        </div>
    );
}

export default ChatFooter;
