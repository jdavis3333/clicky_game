import React, {Component} from 'react';
import './App.css';
import { Navbar, Jumbotron, Container } from 'react-bootstrap';
import Wrapper from "./components/wrapper";
import GiantsCard from "./components/cards";
import giants from "./giants.json";

class App extends Component {
  // Setting this.state.giants to the giants json array
  state = {
    giants: giants,
    score: 0,
    highScore: 0,
    clicked: []
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

// Map over this.state.giants and render a GiantsCard component for each Giant object
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand href="/">Clicky-Game</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              Click an image to begin!
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Score: {this.state.count} | Top Score: {this.state.highScore}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <h1>Clicky Game</h1>
            <p>
              Click on an image to earn points, but don't click on any more than once!
            </p>
          </Container>
        </Jumbotron>
        <Wrapper>
          {this.state.giants.map(giants => (
            <GiantsCard
            image={giants.image}
            handleIncrement={this.handleIncrement}
          />
          ))}
        </Wrapper>
      </div>
    );
  }
};    

export default App;
