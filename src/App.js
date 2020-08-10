import React from 'react';
import './App.css';
import { Navbar, Jumbotron, Container } from 'react-bootstrap';

function App() {
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
            Score: {0} | Top Score: {0}
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
    </div>
  );
}

export default App;
