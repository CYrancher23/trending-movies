import React, { Component } from 'react'
import Trending from "../components/Trending"
import TrendingList from '../components/TrendingList'


 class Home extends Component {

    state={

    }
    

    render() {
        return (
           <div>
               <Trending />
               <TrendingList />

           </div>
        )
    }
}


export default Home