import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json";
import fuel from "./images/fuel.jpg"
import dynasty from "./images/dynasty.jpg"
import reign from "./images/reign.jpg"
import eternal from "./images/eternal.jpg"
import gladiators from "./images/gladiators.jpg"
import fusion from "./images/fusion.jpg"
import spitfire from "./images/spitfire.jpg"
import hunters from "./images/hunters.jpg"
import dragons from "./images/dragons.jpg"
import titans from "./images/titans.jpg"
import outlaws from "./images/outlaws.jpg"
import uprising from "./images/uprising.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click on an image to begin!'
  };
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray;
  }
  pickImg = (name) => {
    console.log("Clicked");
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct +1 : this.state.topscore,
        message: "You chose...wisely.  "
      })
      this.shuffleArray();
    } else {
      this.setState({
        message: "You chose...poorly. Play again?  ",
        correct: 0,
        picked: []
      })
    }
  }
  imgSwitch = (name) => {
    switch(name) {
      case "fuel":
        return `${fuel}`
      case "dynasty":
        return `${dynasty}`
      case "reign":
        return `${reign}`
      case "eternal":
        return `${eternal}`
      case "gladiators":
        return `${gladiators}`
      case "fusion":
        return `${fusion}`
      case "spitfire":
        return `${spitfire}`
      case "hunters":
        return `${hunters}`
      case "dragons":
        return `${dragons}`
      case "titans":
        return `${titans}`
      case "outlaws":
        return `${outlaws}`
      case "uprising":
        return `${uprising}`
      default:
        return `${fuel}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} pickImg={this.pickImg} />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;