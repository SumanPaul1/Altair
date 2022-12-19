import React from 'react';
import Messages from './Messages';
import Input from './Input';
import { useContext } from 'react';
import { ChatContext } from '../context/chatContext';

const Chat = () => {
    const {data} = useContext(ChatContext);

    return (
        <div className='chat'>
            <div className="chat-info">
                <span>{data.user?.displayName}</span>
                {/* <div className="profile"> */}
                    {/* <img src={data.user?.photoURL} alt="" /> */}
                {/* </div> */}
                <div className="chat-icons">
                    <i class="fa-solid fa-video"></i>
                    <i class="fa-solid fa-user-plus"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            <Messages />
            <Input/>
        </div>
    );
}

export default Chat;