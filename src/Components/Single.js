import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'


class Single extends Component {
    render() {
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((element) => id===element.id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.posts.findIndex((post)=> id=== post.id)
        return  <div className='single-photo'>
                     <Photo post={post} {...this.props} index={index} onHistory={this.props.history}/>
                     <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
                </div>
    }
}

export default Single