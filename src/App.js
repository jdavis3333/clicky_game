import React, {Component} from 'react';
import './App.css';
import { Navbar, Jumbotron, Container } from 'react-bootstrap';
import Wrapper from "./components/wrapper";
import GiantsCard from "./components/cards";
import giants from "./giants.json";
import MyJumbotron from "./components/Jumbotron";
import MyNavbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.giants to the giants json array
  state = {
    giants: giants,
    score: 0,
    highScore: 0,
    clickedCards: []
  };
 
  //add one to the score after each click
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });

    //push clicked images into array "clicked"
    // clickedImage = () => {
    //   this.setState({ clickedCards: (this.state.id.push})
    // }

    //if statement to compare new click ID to IDs in clickedCards array. If ===, then game over.



    //transfer score to high score if it is greater than current high score, set score to 0


    //randomize images after each click
    // const clicked = this.state.giants


  };

  



  

  // Map over this.state.giants and render a GiantsCard component for each Giant object
  render() {
    return (
      <div className="App">
      <MyNavbar />
      <MyJumbotron />
        <Wrapper>
          {this.state.giants.map(giants => (
            <GiantsCard
            image={giants.image}
            id={giants.id}
            key={giants.id}
            handleIncrement={this.handleIncrement}
          />
          ))}
        </Wrapper>
      </div>
    );
  }
};    

export default App;
