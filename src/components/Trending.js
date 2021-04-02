import React, { Component } from "react";
import "../components/Trending.css";
import { Link } from "react-router-dom";
// import star from "../assets/1024px-Antu_rating.svg.png";

class Trending extends Component {
  render() {
    console.log(this.props.trending);

    return (
      <div className="movie__box">
        {this.props.trending?.map((trend) => {
          return (
            <Link className="movie__link" to={`/movie/${trend.id}`}>
              <div className="movie__content">
                <img
                  className="movie__img"
                  alt="thumbnail"
                  src={"https://image.tmdb.org/t/p/w200" + trend.poster_path}
                />
                <h1 className="movie__name">{trend.title}</h1>
                <p>TMDB Rating: {trend.vote_average}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Trending;
