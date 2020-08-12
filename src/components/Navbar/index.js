import React from "react";
import "./style.css";
import { Navbar } from 'react-bootstrap';

function MyNavbar(props) {
    return (      
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
                        Score: {props.score} | Top Score: {props.highScore}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>  
    );    
  
}   

export default MyNavbar;