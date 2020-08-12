import React, {Component} from 'react';
import './App.css';
import MyWrapper from "./components/wrapper";
import MyJumbotron from "./components/Jumbotron";


class App extends Component {

  render() {
    return (
      <div className="App">
      <MyJumbotron />
      <MyWrapper />  
      </div>
    );
  }
};    

export default App;
