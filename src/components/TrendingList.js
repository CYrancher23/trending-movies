import React, { Component } from 'react'
import axios from 'axios'
import Trending from "../components/Trending"

class TrendingList extends Component {

    state={
        trending: [],
    }

    apiKey = "api_key=72313e8f83e587a790e2420c3e95261f";
    url = "https://api.themoviedb.org/3/trending/movie/week?";

    componentDidMount(){
        axios.get(`${this.url}${this.apiKey}`)
        .then(response => {
        const topFive = response.data.results.slice(0, 5)
            
          this.setState({
            trending: topFive,
            
          });
        });
    }

    changeVideo=(id)=> {
        let changeVideo= this.state.nextVid.find((vid) => vid.id === id);
        
        this.setState({
          defaultVid: changeVideo
        })
      }
        

    render() {
        console.log(this.state)
        return (
            <div>
                <Trending trending={this.state.trending}/>
                
            </div>
        )
    }
}


export default TrendingList