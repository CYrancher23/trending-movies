import React, { Component } from 'react'
import axios from 'axios'
import "../pages/Movie.css"
import blank from "../assets/blankpic.jpg"


class Movie extends Component {

  

    state={
        details:[],
        credits:[]
    }

    componentDidMount(){
          axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=72313e8f83e587a790e2420c3e95261f`)
          .then(response => {
            this.setState({
              details: response.data,
             
            });
        })
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=72313e8f83e587a790e2420c3e95261f&language=en-US`)
        .then(response => {
            const topTen = response.data.cast.slice(0, 10)
            this.setState({
                credits: topTen
            })
        })
      }
    

    render() {
       
        
        console.log(this.state)
        return (
            <div className="movie">
                <img className="movie__poster" alt="thumbnail" src={'https://image.tmdb.org/t/p/w400'+this.state.details.poster_path} />
                <h1 className="movie__title">{this.state.details.title}</h1>
                <p className="movie__description">{this.state.details.overview}</p>
                <p className="movie__release">Release Date: {new Date(this.state.details.release_date).toLocaleDateString()}</p>
                <p className="movie__rating">TMDB Rating: {this.state.details.vote_average}</p>
                <button className="movie__button" type="button"> <a className="movie__button--text" href={this.state.details.homepage}>Watch Here!</a></button>
                
             
                <div className="credits">
                    {this.state.credits?.map((peeps)=>{
                        
                        return(
                            
                                <div>
                                    
                                    <img className="credits__img" src=
                                    {peeps.profile_path ? `https://image.tmdb.org/t/p/w200${peeps.profile_path}` : blank}
                                    />
                                    <p className="credits__character">{peeps.character}</p>
                                    <p className="credits__name">{peeps.name}</p>
                                </div>
                           
                        )
                    })}
                </div>
               
            </div>
        )
    }
}


export default Movie