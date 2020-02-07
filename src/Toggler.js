import React from "react";

class Toggler extends React.Component {
    state = {
        val: "Hello World",
        val1: "Hello World",
        val2: "Hello Planet",
        val3: "Hello Universe"
    };
    
    handleClick = () => {
        console.log(this.state.val)
        if(this.state.val === this.state.val1){
            this.setState({val : this.state.val2})
        }
        else if(this.state.val === this.state.val2){
            this.setState({val : this.state.val3})
        }
        else if(this.state.val === this.state.val3){
            this.setState({val : this.state.val1})
        }
    }
    
    render() {
        return (
          <div className = "App">
            <br/>
            <button onClick = {this.handleClick}>Toggle</button>
            <br/><br/>
            <h1>{this.state.val}</h1>
            <br/>
          </div>
        );
    }
}

export default Toggler;