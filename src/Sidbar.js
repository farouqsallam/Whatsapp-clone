import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton, Avatar} from '@material-ui/core';


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src=""></Avatar>
                <div className="sidbar_header_right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="search_bar">
                <div className="search_bar_conatainer">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="sidebar_chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;