import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
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
                        Score: {0} | Top Score: {0}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>  
    );    
  
}   

export default Navbar;