import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  api = process.env.REACT_APP_NEWS_API
  constructor() {
    super();

    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor = "rgb(56, 56, 56)";
      document.body.style.color = "azure";
    } else {
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key=""
                pageSize={6}
                category=""
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="general"
                pageSize={6}
                category="general"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="entertainment"
                pageSize={6}
                category="entertainment"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="sports"
                pageSize={6}
                category="sports"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="health"
                pageSize={6}
                category="health"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="business"
                pageSize={6}
                category="business"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="technology"
                pageSize={6}
                category="technology"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                api={this.api}
                key="science"
                pageSize={6}
                category="science"
                country="in"
                mode={this.state.mode}
                toggleMode={this.toggleMode}
              />
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