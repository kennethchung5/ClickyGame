import React from "react"
import "./style.css";

const Tile = props => {
    return (

        <img src={props.img} alt={props.name}/>

    )
};


export default Tile;