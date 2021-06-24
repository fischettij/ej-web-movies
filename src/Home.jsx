import {React, useState, useEffect, useContext} from 'react'
import axios from 'axios';
import AddMovie from './AddMovie.js'
import Movie from './Movie.js'
import {SessionContext} from './Session'

export default function Home() {
    const [movies, setMovies] = useState([])
    const {state} = useContext(SessionContext)

    const api = axios.create({
        baseURL: 'http://localhost:7000',
        timeout: 1000,
        headers: {'authorization': state.user.token}
        });

    useEffect(() => {
        api.get("/movies")
        .then(response => setMovies(response.data))
        .catch(error => console.log(error))
    }, [])

    const addMovie = (movie) => {
        movie.cover=""
        api.post("/movies",movie)
        .then(response => {
            setMovies((prevState) => [response.data, ...prevState])
        })
        .catch(error => console.log(error))
    }

    const removeMovie = (id) => {
        api.delete(`/movies/${id}`)
        .then(_ => setMovies(prevState => prevState.filter(movie => movie.id !== id)))
        .catch(error => console.log(error))
    }

    return (
        <>
            <AddMovie onAccept={addMovie} />
            <div className="row">
                {movies.map(movie => <Movie key={movie.id} removeAction={removeMovie} {...movie} />)}
            </div>
        </>
    )
}
