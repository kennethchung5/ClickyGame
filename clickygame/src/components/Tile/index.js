import React from "react"
import "./style.css";

const Tile = props => {
    return (
        <img onClick={props.handleTileClick} src={props.img} alt={props.name}/>
    )
};


export default Tile;