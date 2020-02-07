import React from 'react';
import Toggler from "./Toggler";
import "./App.css";

class App extends React.Component {
  state = { 
    show: false 
  };
  
  render() {
    return (
      <div className="App">
        <br/>
        <button onClick = {() => this.setState(state => ({ show: !state.show }))}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        <br/><br/>
        {this.state.show && <Toggler />}
      </div>
    );
  }
}

export default App;