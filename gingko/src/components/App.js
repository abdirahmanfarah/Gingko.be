import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./Home";
import About from "./About";

// Styles
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
