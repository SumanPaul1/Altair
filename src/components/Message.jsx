import React from 'react';

const Message = () => {
    return (
        <div className='message  owner'>
            <div className="message-info">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                <span>just now</span>
            </div>
            <div className="message-content">
                <p>Hello</p>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            </div>
        </div>
    );
}

export default Message;