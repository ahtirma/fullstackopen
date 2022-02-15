import React from "react";

const Notification = ({message, messageType}) => {
    if(message === null) {
        return null;       
    }
    return (
        <div className={messageType === 'info' ? 'info' : 'error'}>
            {message}
        </div>
    )
}

export default Notification;