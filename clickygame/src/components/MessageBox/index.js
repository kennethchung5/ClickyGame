import React from "react";

import "./style.css";


const MessageBox = props => {
    return (
        <h3 id="message" className={props.classign}>{props.children}</h3>
    )
}

export default MessageBox;