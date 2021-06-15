import React from 'react';

const Movie = ({ id, title, oscar, description, removeAction }) => {
    const handleRemove = () => removeAction(id)
  
    return (
      <div className={`card${oscar ? " oscar" : ""} col-md-5 card-margin`} >
        <div className="card-body"> 
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
  
          <button type="button" className="btn btn-danger" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    )
  }

  export default Movie;