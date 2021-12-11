import React from 'react';
import PropTypes from 'prop-types';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Link } from 'react-router-dom';

import "./PostItem.scss";

PostItem.propTypes = {
    post: PropTypes.object,
}
PostItem.defaultProps = {
    post: null,
}

function PostItem(props) {
    const { post } = props;

    return (
        <Link to={`/client/posts/${post ? post.slug : ''}.html`}>
            <div className="post__box">
                <h4 className="post__title">
                    {post ? post.name : ''}
                </h4>
                <div className="post__desc-short">
                <div dangerouslySetInnerHTML={{ __html: post ? post.description : '' }} />
                </div>
                <div className="post__view-comment">
                    <div className="post__view-comment__box">
                        <span className="post__view-comment__icon">
                            <ThumbUpAltIcon fontSize="small" />
                        </span>
                        <span className="post__view-comment__text">
                        {post ? post.totalThumb : 0}
                        </span>
                    </div>
                    <div className="post__view-comment__box">
                        <span className="post__view-comment__icon">
                            <ModeCommentIcon fontSize="small" />
                        </span>
                        <span className="post__view-comment__text">
                        {post ? post.totalComment : 0}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}



export default PostItem

