import React from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat(){
    return <div className="side_bar_chat">
        <Avatar />
        <div className="chat_info">
            <h2>The room name.</h2>
            <p>This is the last message.</p>
        </div>
    </div>
}

export default SidebarChat;