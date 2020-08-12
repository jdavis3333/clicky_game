import React from "react";
import "./style.css";
import {Jumbotron, Container } from 'react-bootstrap';

function MyJumbotron() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Clicky Game</h1>
                <p>
                    Click on an image to earn points, but don't click on any more than once!
          </p>
            </Container>
      </Jumbotron>
    );
}

export default MyJumbotron;