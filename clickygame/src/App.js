import React, {Component} from "react";

import Tile from "./components/Tile";
import TileDisplay from "./components/TileDisplay";
import ScoreBox from "./components/ScoreBox";
import MessageBox from "./components/MessageBox";

import tiles from "./tiles.json";


class App extends Component {
    state = {
        score: 0,
        topScore: 0,         
        clickedIDs: [],
        message: "",
        messageClass: ""
    };


    clearCurrentGame = () => {
        this.setState({
            score: 0,
            clickedIDs: []
        })
    };

    resetGame = () => {
        this.setState({
            message: ""
        });

        this.clearCurrentGame();
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
        //check if new game
        if (this.state.score === tiles.length) {
            this.resetGame();
        } else {

            const clicked = this.state.clickedIDs;
            //check if tile already clicked
            if (clicked.indexOf(tileID) >= 0) {
                this.setState({
                    message: "That tile was already clicked!",
                    messageClass: "test1"
                })

                this.clearCurrentGame();
            } else {            
                this.setState({
                    topScore: Math.max(this.state.score + 1, this.state.topScore),
                    score: this.state.score + 1,
                })

                clicked.push(tileID);

                //check for win
                if (clicked.length === tiles.length) {
                    this.setState({
                        message: "You win!\nClick any tile to start a new game."                        
                    })
                } else {
                    this.setState({
                        clickedIDs: clicked,
                        message: "Correct!",
                        messageClass: "test2"            
                    })            
                }
            }
        }
    };

    render() {
        return (
            <div>
                <ScoreBox score={this.state.score} topScore={this.state.topScore} resetGame={this.resetGame}/>
                <MessageBox classign={this.state.messageClass}>{this.state.message}</MessageBox>
                <TileDisplay >
                    {this.reOrder(
                        tiles.map(tile => (
                        <Tile key={tile.id} id={tile.id} handleTileClick={this.handleTileClick} img={tile.img}/>
                    )))}                    
                </TileDisplay>
            </div>
        )
    };
}

export default App;