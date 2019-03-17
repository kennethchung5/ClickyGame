import React, {Component} from "react";

import Tile from "./components/Tile";
import TileDisplay from "./components/TileDisplay";
import ScoreBox from "./components/ScoreBox";

import tiles from "./tiles.json";


class App extends Component {
    state = {
        score: 0,
        topScore: 0, 
        clickedIDs: []
    };

    resetGame = () => {
        this.setState({
            score: 0,
            clickedIDs: []
        })
    };


    reOrder = inputArray => {
        const newArray=[];

        for (let i=inputArray.length; i>0; i--) {
            let randIndex = Math.floor(Math.random() * i)

            newArray.push(inputArray.splice(randIndex, 1));            
        }

        return newArray;
    };


    handleTileClick = tileID => {        
        const clicked = this.state.clickedIDs;

        if (clicked.indexOf(tileID) >= 0) {
            this.resetGame();
        } else {
            clicked.push(tileID);

            this.setState({
                topScore: Math.max(this.state.score + 1, this.state.topScore),
                score: this.state.score + 1,
                clickedIDs: clicked            
            })        
        }
    };

    render() {
        return (
            <div>
                <ScoreBox score={this.state.score} topScore={this.state.topScore} resetGame={this.resetGame}/>
                <TileDisplay >

                    {this.reOrder(tiles.map(tile => (
                        <Tile key={tile.id} id={tile.id} handleTileClick={this.handleTileClick} img={tile.img}/>
                    )))}
                    
                </TileDisplay>
            </div>
        )
    };
}

export default App;