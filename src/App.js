import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Header from "./components/Header";

class App extends Component {
  apiKey = "72313e8f83e587a790e2420c3e95261f";
  url = "https://api.themoviedb.org/3/movie/550?";

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
