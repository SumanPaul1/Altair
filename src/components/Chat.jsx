import React from 'react';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat-info">
                <span>Aiony</span>
                <div className="chat-icons">
                    <i class="fa-solid fa-video"></i>
                    <i class="fa-solid fa-user-plus"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
}

export default Chat;
