import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: "",
        description: "",
      };
    }
  
    handleChange = name => event => {
      this.setState((prevState) => { return { ...prevState, [name]: event.target.value } })
      this.setState((prevState) => { return (prevState.title && prevState.description) ? { ...prevState, valid: true } : { ...prevState, valid: false } })
    }
  
    isValidData = () => this.state.title.trim() && this.state.description.trim()
  
    handleClic = (event) => {
      event.preventDefault()
      if (this.isValidData()) {
        this.props.onAccept(this.state);
        this.setState({ title: "", description: "" });
      }
    }
  
    render() {
      return (
          <form className="needs-validation">
            <div className="row">
              <div className="col-3">
                <label htmlFor="add-movie-name" className="form-label">Title:</label>
              </div>
              <div className="col-auto">
                <input name="title" required type="text" id="add-movie-name" className="form-control" value={this.state.title} onChange={this.handleChange("title")} />
              </div>
            </div>
            <div className="row ">
            <div className="col-3">
              <label htmlFor="movie-add-description" className="form-label">Description:</label>
            </div>
            <div className="col-auto">
              <input name="description" required type="text" id="movie-add-description"   className="form-control" value={this.state.description} onChange={this.handleChange("description")} />
            </div>
            </div>
            <button type="submit" className={`btn btn-primary ${this.state.valid ? " enabled" : "disabled"}`}  onClick={this.handleClic}>Add Movie</button>
          </form>
        )
    }
  }

export default AddMovie