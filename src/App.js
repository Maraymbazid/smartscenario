
import React, { Component } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";


//const apilink ='http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44'
class App extends Component {

  render() {
    return (
      <div className="App">

        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
        <Footer></Footer>
      </div>
    );

  }

}

export default App;

