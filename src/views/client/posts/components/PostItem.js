import React from 'react';
import PropTypes from 'prop-types';
import PreviewIcon from '@mui/icons-material/Preview';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Link } from 'react-router-dom';

import "./PostItem.scss";

PostItem.propTypes = {

}

function PostItem(props) {
    return (
        <Link to="/client/posts/bai-viet.html">
            <div className="post__box">
                <h4 className="post__title">
                    Điều gì lam như thế này? Điều gì lam như thế này? Điều gì lam như thế này?
                </h4>
                <div className="post__view-comment">
                    <div className="post__view-comment__box">
                        <span className="post__view-comment__icon">
                            <PreviewIcon fontSize="small" />
                        </span>
                        <span className="post__view-comment__text">
                            143
                        </span>
                    </div>
                    <div className="post__view-comment__box">
                        <span className="post__view-comment__icon">
                            <ModeCommentIcon fontSize="small" />
                        </span>
                        <span className="post__view-comment__text">
                            143
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}



export default PostItem

