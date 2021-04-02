import React, { Component } from 'react'
import '../components/Trending.css'
import {Link} from "react-router-dom"

class Trending extends Component {
    render() {
        console.log(this.props.trending)
        return (
            <div>
                {this.props.trending?.map((trend)=>{
                    return(
                        <Link to={`/movie/${trend.id}`}>
                        <div>
                           <img className="" alt="thumbnail" src={'https://image.tmdb.org/t/p/w200'+trend.poster_path} />
                            <h1>{trend.title}</h1>
                            <p>{trend.vote_average}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}


export default Trending