import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const imageDescription = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: imageDescription,
            imageLink: imageLink
        }
        if(imageLink && imageDescription) {
            this.props.onAddPhoto(post)
        }

    }
    render() {
        return (
            <div>
                <h1> Add Photo </h1>
                <div className="form">
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button> post </button>
                    </form>
                </div>
            </div>

        ) 
    }

}
export default AddPhoto