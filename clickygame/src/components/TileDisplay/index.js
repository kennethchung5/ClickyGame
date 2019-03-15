import React from "react";

import "./style.css";

const TileDisplay = props => {
    return (
        <div className="tileDisplay">{props.children}</div>
    )
}

export default TileDisplay;