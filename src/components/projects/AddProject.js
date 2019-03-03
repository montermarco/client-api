import React, { Component } from 'react';

class AddProject extends Component {
    state = {
        title: "",
        description: ""
    };

    handleFormSubmit = event => {
        event.preventDefault()
        const title = this.state.title
        const description = this.state.description
        const data = {
            title: title,
            description: description
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        };

        fetch("http://localhost:3001/api/projects" , options)
        .then( ()=>{
            this.props.getData();// here, with getData we update the list when we add a poject, so it can be added
            this.setState({title: "", description:""});
        })
        .catch(error => console.log(error));
    };

    // the state is a json object, we can access the json with dot notation. SO we are setting a set state for the two inputs we have
    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input 
                    type="text" 
                    name="title" 
                    value={this.state.title} 
                    onChange={ e => this.handleChange(e)}/>
                    
                    <label htmlFor='description'>Description:</label>
                    <textarea 
                    name="description" 
                    value={this.state.description} 
                    onChange={ e => this.handleChange(e)} />
                    
                    <input type="submit" value="Create Proyect" />
                </form>

            </div>
        )
    }
};

export default AddProject;

