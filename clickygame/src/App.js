import React, {Component} from "react";


import Tile from "./components/Tile";
import TileDisplay from "./components/TileDisplay";
import ScoreBox from "./components/ScoreBox";

import tiles from "./tiles.json";


class App extends Component {
    state = {
        tiles: tiles,
        score: 0,
        topScore: 0
    };


    scoreUp = () => {                            
        this.setState({
            topScore: Math.max(this.state.score + 1, this.state.topScore),
            score: this.state.score + 1            
        })        
    };

    resetGame = () => {
        this.setState({
            score: 0
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


    handleTileClick = () => {
        //check whether tile is already clicked


        this.scoreUp();
    };

    render() {
        return (
            <div>
                <ScoreBox score={this.state.score} topScore={this.state.topScore} resetGame={this.resetGame}/>
                <TileDisplay >

                    {this.reOrder(this.state.tiles.map(tile => (
                        <Tile key={tile.id} handleTileClick={this.handleTileClick} img={tile.img}/>
                    )))}
                    
                </TileDisplay>
            </div>
        )
    };
}

export default App;