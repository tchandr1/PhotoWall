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
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')
        }

    }
    render() {
        console.log('AddPhoto')
        console.log(this.props)

        return (
            <div>
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