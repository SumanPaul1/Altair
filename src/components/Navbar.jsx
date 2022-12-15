import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Altair.</span>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
                <span>Suman</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
