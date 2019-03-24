import React, {Component} from "react";

import "./style.css";

class MessageBox extends Component {
    state = {
        animating: false,        
        messageClass: ""
    };

    componentDidUpdate(prevProps, prevState) {
        //describe the game transitions using the score and inPlay props. 
        //These conditions check for a change in some prop, so setState will not be called again if the re-render was triggered internally; it will be called only once from the passage of new props.
        if (this.props.score > prevProps.score) {            
            this.setState({
                messageClass: "greenMessage",
                animating: true
            });            
        } else if (prevProps.inPlay && !this.props.inPlay) {
            this.setState({
                messageClass: "redMessage",
                animating: true
            })
        } else if (!prevProps.inPlay && this.props.inPlay) {
            this.setState({
                messageClass: "",
                animating: false
            })
        }       
    };

    render() {
        return (
            <h3 id="message" 
                onAnimationEnd={() => this.setState({animating: false})} 
                className={this.state.animating? this.state.messageClass : ""}
            >{this.props.children}</h3>
        )
    };
}

export default MessageBox;