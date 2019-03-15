import React, {Component} from "react";


import Tile from "./components/Tile";
import TileDisplay from "./components/TileDisplay";

import tiles from "./tiles.json";


class App extends Component {
    state = {
        tiles
    };



    render() {
        return (
            <TileDisplay >

            {this.state.tiles.map(tile => (
                <Tile img={tile.img} id={tile.id}/>
            ))}
                
            </TileDisplay>
        )
    };
}

export default App;