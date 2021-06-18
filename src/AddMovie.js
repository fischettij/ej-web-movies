import { React, useEffect, useState } from 'react';

const AddMovie = ({ onAccept }) => {

  const [movie, setMovie] = useState({ title: "", description: "" })
  const [isValid, setIsValid] = useState(false)

   useEffect(() => {
     setIsValid((movie.title.trim() && movie.description.trim()))
   }, [movie])

  const handleChange = name => event => {
    setMovie(prevState => ({ ...prevState, [name]: event.target.value }))
  }

  const handleClic = (event) => {
    event.preventDefault()
    if (isValid) {
      onAccept(movie);
      setMovie({ title: "", description: "" });
    }
  }

  return (
    <form className="needs-validation">
      <div className="row">
        <div className="col-3">
          <label htmlFor="add-movie-name" className="form-label">Title:</label>
        </div>
        <div className="col-auto">
          <input name="title" required type="text" id="add-movie-name" className="form-control" value={movie.title} onChange={handleChange("title")} />
        </div>
      </div>
      <div className="row ">
        <div className="col-3">
          <label htmlFor="movie-add-description" className="form-label">Description:</label>
        </div>
        <div className="col-auto">
          <input name="description" required type="text" id="movie-add-description" className="form-control" value={movie.description} onChange={handleChange("description")} />
        </div>
      </div>
      <button type="submit" className={`btn btn-primary ${isValid ? " enabled" : "disabled"}`} onClick={handleClic}>Add Movie</button>
    </form>
  )

}

export default AddMovie