import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={6} category="" country="in" />
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={6} category="general" country="in" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={6} category="entertainment" country="in" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={6} category="sports" country="in" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={6} category="health" country="in" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={6} category="business" country="in" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={6} category="technology" country="in" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
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
