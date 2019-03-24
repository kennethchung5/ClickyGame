import React, {Component} from "react";

import "./style.css";


// const MessageBox = props => {
//     return (
//         <h3 id="message" className={props.classign}>{props.children}</h3>
//     )
// }

class MessageBox extends Component {
    state = {
        animating: false,        
        newClass: ""
    };

    componentDidUpdate(prevProps, prevState) {

        if (this.props.score > prevProps.score) {            
            this.setState({
                newClass: "greenMessage",
                animating: true
            });            
        }        
    };

    render() {
        return (
            <h3 id="message" 
                onAnimationEnd={() => this.setState({animating: false})} 
                className={this.state.animating? this.state.newClass : ""}
            >{this.props.children}</h3>
        )
    };
}

export default MessageBox;