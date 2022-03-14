import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Message.css';

function Message({ message, username }) {
    const isUser = username === message.username;
    return (
        <div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color="black"
                        variants="h5"
                        components="h2"
                    >
                        {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default Message