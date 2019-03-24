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
        inPlay: true,
        message: "Click any tile to begin!"
        // messageClass: ""        
    };


    resetGame = () => {
        this.setState({
            score: 0,
            clickedIDs: [],
            inPlay: true,
            message: "Click any tile to begin!"
        });
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
        //check if inPlay; if not, then start new game
        if (!this.state.inPlay) {
            this.resetGame();
        } else {

            const clicked = this.state.clickedIDs;
            //check if tile already clicked
            if (clicked.indexOf(tileID) >= 0) {
                this.setState({
                    inPlay: false,
                    message: "That tile was already clicked!\nClick any tile to start a new game.",
                    // messageClass: "redMessage"                    
                })

            } else {            
                // this.setState({
                //     topScore: Math.max(this.state.score + 1, this.state.topScore),
                //     score: this.state.score + 1                    
                // })

                const newState = {
                    topScore: Math.max(this.state.score + 1, this.state.topScore),
                    score: this.state.score + 1                    
                }

                clicked.push(tileID);

                //check for win
                if (clicked.length === tiles.length) {                    
                    // this.setState({
                    //     inPlay: false,
                    //     message: "You win!\nClick any tile to start a new game."                        
                    // })
                    newState.inPlay = false;
                    newState.message = "You win!\nClick any tile to start a new game.";
                } else {
                    // this.setState({
                    //     clickedIDs: clicked,
                    //     message: "Correct!"                        
                    // })            

                    newState.clickedIDs = clicked;
                    newState.message = "Correct!";
                }

                this.setState(newState);
            }
        }
    };

    render() {
        return (
            <div>
                <ScoreBox score={this.state.score} topScore={this.state.topScore} resetGame={this.resetGame}/>
                <MessageBox score={this.state.score}>{this.state.message}</MessageBox>
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