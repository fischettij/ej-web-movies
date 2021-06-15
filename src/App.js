import {React} from 'react';
import AddMovie from './AddMovie.js'
import Movie from './Movie.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { id: 0, oscar: true, title: "IT", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
        { id: 1, title: "Peli 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
        { id: 2, title: "Peli 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
      ]
    }
  }

  componentDidMount() {
    console.log("DidMount")
  }

  componentWillUnmount(){
    console.log(console.log("DidUnmount"))
  }

  componentDidUpdate() {
    console.log("DidUpdate")
  }

  addMovie = (movie) => {
    this.setState((prevState) => {
      return {
        movies: [{ ...movie, id: prevState.movies.length }, ...prevState.movies]
      }
    })
  };

  removeMovie = (id) => {
    this.setState(
      prevState => {
        return {
          movies: prevState.movies.filter(movie => movie.id !== id)
        }
      }
    )
  }

  render() {
    console.log("Render")
    return (
      <div className="container">
        <AddMovie onAccept={this.addMovie} />
        <div className="row">
        {this.state.movies.map(movie => <Movie key={movie.id} removeAction={this.removeMovie} {...movie} />)}
        </div>
      </div>
    );
  }
}

export default App;
