import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                <img className="" alt="thumbnail" src={'https://image.tmdb.org/t/p/w200'+this.state.details.poster_path} />
                <h1>{this.state.details.title}</h1>
                <p>{this.state.details.overview}</p>
                <p>{this.state.details.release_date}</p>
                <p>{this.state.details.vote_average}</p>
                <a href={this.state.details.homepage}>Watch Here!</a>
                {/* <p>{this.state.credits.character}</p> */}
                <div>
                    {this.state.credits?.map((peeps)=>{
                        return(
                            <div>
                                <p>{peeps.character}</p>
                                <p>{peeps.name}</p>
                                <img src={'https://image.tmdb.org/t/p/w200'+peeps.profile_path} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default Movie