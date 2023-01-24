import React from 'react';
import Messages from './Messages';
import Input from './Input';
import { useContext } from 'react';
import { ChatContext } from '../context/chatContext';

const Chat = () => {
    const {data} = useContext(ChatContext);

    var menu = document.querySelector(".pop-up");
    const handlePop = async() => {
        menu.classList.toggle("func-pop");
    }

    return (
        <div className='chat'>
            <div className="chat-info">
                <span>{data.user?.displayName}</span>
                {/* <div className="profile">
                    <img src={data.user?.photoURL} alt="" />
                </div> */}
                <div className="pop-up">
                    <div className="pop-item">New Group</div>
                    <div className="pop-item">New Broadcast</div>
                    <div className="pop-item">Linked Devices</div>
                    <div className="pop-item">Starred Devices</div>
                    <div className="pop-item">Settings</div>
                </div>
                <div className="chat-icons">
                    <i class="fa-solid fa-ellipsis" onClick={() =>handlePop()}></i>
                </div>
            </div>
            <Messages />
            <Input/>
        </div>
    );
}

export default Chat;