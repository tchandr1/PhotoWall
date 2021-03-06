import React from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function PhotoWall(props){
    return <div>     
                <Link className="addIcon" to="/AddPhoto"></Link>
                {/* <button className="addIcon" onClick={props.onNavigate}></button> */}
                <div className="photoGrid">
                    {props.posts
                    .sort((x,y) => y.id - x.id)
                    .map((post,index,params) =>
                    <Photo key ={index} post={post} {...props} {...params} index={index}></Photo>)}
                </div>
            </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall