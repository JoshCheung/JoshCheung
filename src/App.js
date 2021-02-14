import React, { Component } from 'react';
import './components/css/Main.css';
import Main from './components/Main';
import Navbar from "./components/Navbar";

import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
       return (

           <div>
               <Navbar/>
               <Main/>
           </div>


       );
    }
}
export default App;
