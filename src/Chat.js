import React from 'react';
import './Chat.css';
import {IconButton, Avatar} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat(){
    return(
        <div className="chat">
            <div className="chat_header">
                <Avatar src=""/>
                <div className="chat_header_info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">farouk</span>
                    This is a message
                    <span className="time_stamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_reciever">
                    <span className="chat_name">farouk</span>
                    This is a message
                    <span className="time_stamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message">
                    <span className="chat_name">farouk</span>
                    This is a message
                    <span className="time_stamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;