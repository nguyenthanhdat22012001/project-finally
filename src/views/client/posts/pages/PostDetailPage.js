import React from 'react';
import PropTypes from 'prop-types';
import {Link,useParams} from "react-router-dom";

PostDetailPage.propTypes = {

}

function PostDetailPage(props) {
    const { slug } = useParams();
    console.log('slug',slug);
    return (
        <div>
            
        </div>
    )
}



export default PostDetailPage

