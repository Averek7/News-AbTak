import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}





// Function Based

// function App() {
//   return (
//     <>

//     </>
//   );
// }

// export default App;
