import React, { Component } from "react";
import Trending from "../components/Trending";
import TrendingList from "../components/TrendingList";
import "./home.scss";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home">
        <Trending />
        <TrendingList />
      </div>
    );
  }
}

export default Home;
