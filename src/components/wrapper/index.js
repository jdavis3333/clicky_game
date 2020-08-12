import React from "react";
import "./style.css";
import giants from "./giants.json";
import GiantsCard from "../cards";
import MyNavbar from "../Navbar";

class MyWrapper extends React.Component {
  state = {
    giants,
    score: 0,
    highScore: 0,
  };


  handleIncrement = (id) => {
    var giants = this.state.giants;
    var score = this.state.score;
    var highScore = this.state.highScore;
    for (let i = 0; i < giants.length; i++) {
      if(giants[i].id === id) {
        if(giants[i].clicked === false) {
          score ++ 
          giants[i].clicked = true;
        }else {
          //transfer score to high score 
          if(score > highScore) {
            highScore = score
          }
          score = 0
        }
      }
    }
    //shuffle cards on click
    this.state.giants.sort(() => Math.random() - .5)
    this.setState({ score: score, highScore: highScore, giants: giants, });

  };

  render() {
    return ( 
      <div>
        <MyNavbar 
          score = {this.state.score}
          highScore = {this.state.highScore}
        />
        <div className="container">
            {this.state.giants.map(giantsPlayers => (
              <GiantsCard
              image={giantsPlayers.image}
              id={giantsPlayers.id}
              key={giantsPlayers.id}
              handleIncrement={this.handleIncrement}
            />
            ))}
        </div>
      </div>  
    )
  }
}

export default MyWrapper;
