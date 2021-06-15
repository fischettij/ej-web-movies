import { React, useState } from 'react';
import AddMovieHook from './AddMovieHook.js'
import Movie from './Movie.js'
import './App.css';

const defaultMovies = [
    { id: 0, oscar: true, title: "IT", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
    { id: 1, title: "Peli 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
    { id: 2, title: "Peli 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
]

const AppHook = () => {
    const [movies, setMovies] = useState(defaultMovies)

    const addMovie = (movie) => setMovies((prevState) => [{ ...movie, id: prevState.length }, ...movies])
    const removeMovie = (id) => setMovies(prevState => prevState.filter(movie => movie.id !== id))

    return (
        <div className="container">
            <AddMovieHook onAccept={addMovie} />
            <div className="row">
                {movies.map(movie => <Movie key={movie.id} removeAction={removeMovie} {...movie} />)}
            </div>
        </div>
    );
}

export default AppHook;
