import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';


class App extends React.Component {

    //state initialize
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        // console.log("=== getMovies start ===");
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        // console.log("=== getMovies end ===");   //여기는 axios 비동기 통신이 종료된 후에 순차 실행된다.

        // console.log("=== setState start ===");
        this.setState({isLoading: false, movies});
        // console.log("=== setState end ===");

    }

    componentWillMount() {
        // console.log("=== componentWillMount start ===");
        // console.log("=== componentWillMount end ===");
    }

    componentDidMount() {
        // console.log("=== componentDidMount start ===");
        this.getMovies();
        // console.log("=== componentDidMount end ===");
    }

    render() {
        console.log("=== render start ===");
        const { isLoading, movies } = this.state;

        console.log("=== render end ===");
        return (
            <section className="container"> {
            isLoading ?
                (
                    <div className="loader">
                        <span className="loader_text">Now Loading ...</span>
                    </div>
                )
                : /*"We are Ready!"*/
                (
                    <div className="movies">
                        {
                        movies.map((movie, idx) => {
                            return <Movie
                                key={movie.id}
                                idx={idx +1}
                                score={movie.rating}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />;
                        })
                    }
                    </div>
                )
        }</section>
        );
    }
}

/*
Second App.js

class App extends React.Component {
    constructor(porps) {
        super();
        console.log("constructor hello");
    }

    state = {
        count: 0
    };

    increase = () => {
        this.setState((state) => ({count: state.count+1}) );
    };

    decrease = () => {
        this.setState((state) => ({count: state.count-1}) );
    };

    componentDidMount() {
        console.log("component did mount");
        //Render Complete 같은거?
    }

    componentDidUpdate() {
        console.log("component did update");
        //Render complete 같은건데 component update 이후니까 change Component after 같은 느낌
    }

    componentWillUnmount() {
        console.log("componoent will unmount");
    }

    render () {
        console.log("im rendering");
        return (
            <div>
                <h1> Number : {this.state.count} </h1>
                <button onClick={this.increase}> &nbsp; + &nbsp; </button>
                <button onClick={this.decrease}> &nbsp; - &nbsp; </button>
            </div>
        )
    }
}
*/

/*

First App.js


function Food ({name, image, rating}) {
  return (
      <div>
          <h1>I like {name} </h1>
          <h4>{rating}/5.0</h4>
          <img src={image} alt={name}/>
      </div>
  )
}



const foodList = [
  {
    id: 1,
    name: "apple",
    image: `data:image/jpeg;base64,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`,
    rating: 3.2
  },
  {
    id: 2,
    name: "fineApple",
    image: `data:image/jpeg;base64,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`,
    rating: 3.9
  }
];


function App() {
  return (
      // <div className="App" />
      <div>
        {
          foodList.map( x => <Food id={x.id} name={x.name} image={x.image} rating={x.rating}/> )
        }
      </div>
  );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}
*/

export default App;
