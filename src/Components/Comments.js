import React,{Component} from 'react'
import { render } from '@testing-library/react'

class Comments extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        this.props.addComment(comment, this.props.id)   
        event.target.elements.comment.value = null

    }


    render() {
        return       <div className="comment">
                    <form className= "comment-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Comments" name="comment"/>
                        <input  type="submit" hidden/>
                    </form>

                     
             {
                this.props.comments.map((comment,index)=>{
                    return (
                        <p key={index}>{comment}</p>
                    )
                })
            } 
                </div>
    }
}


export default Comments