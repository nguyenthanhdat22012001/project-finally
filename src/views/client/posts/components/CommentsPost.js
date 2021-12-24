import React from 'react';
import PropTypes from 'prop-types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Button from '@mui/material/Button';
//helper
import { distanceToNow } from "helper/FormatDate";
//redux
import { useSelector } from 'react-redux';

import AvatarCircelShortText from "components/avatar/AvatarCircelShortText";
import "./CommentsPost.scss";

CommentsPost.propTypes = {
    comments: PropTypes.array,
    handleToggleDialogReplyCommen: PropTypes.func,
}
CommentsPost.defaultProps = {
    comments: [],
}

function CommentsPost(props) {
    const user = useSelector(state => state.auth.user);
    const { comments, handleToggleDialogReplyCommen } = props;

    return (
        <ul className="posts__cp__comments">
            {
                [...comments].length > 0 ?
                    [...comments].map(item => {
                        //check has sub comment
                        if ([...item.sub_comments].length > 0) {

                            return <li key={item.id} className="posts__cp__comment">
                                <div className="posts__cp__comment__top">
                                    <div className="posts__cp__comment__image">
                                        <AvatarCircelShortText name={item.user.name} />
                                    </div>
                                    <div className="posts__cp__comment__user">
                                        <span>{user && user.id === item.user_id ? "Bạn" : item.user.name}</span>
                                        <span><AccessTimeIcon fontSize="small" /> {item ? distanceToNow(item.created_at) : ''}</span>
                                    </div>
                                </div>
                                <div className="posts__cp__comment__body">
                                    {item.comment}
                                </div>
                                <div className="posts__cp__comment__bottom">
                                    {
                                        !user || user.id !== item.user_id ?
                                            <Button size="small" onClick={() => handleToggleDialogReplyCommen(true, item.id)} >
                                                Trả lời
                                            </Button>
                                            : ""
                                    }
                                </div>
                                {
                                    [...item.sub_comments].map(item => {
                                        return <li key={item.id} className="posts__cp__comment posts__cp__comment-sub">
                                            <div className="posts__cp__comment__top">
                                                <div className="posts__cp__comment__image">
                                                    <AvatarCircelShortText name={item.user.name} />
                                                </div>
                                                <div className="posts__cp__comment__user">
                                                    <span>{user && user.id === item.user_id ? "Bạn" : item.user.name}</span>
                                                    <span><AccessTimeIcon fontSize="small" />  {item ? distanceToNow(item.created_at) : ''}</span>
                                                </div>
                                            </div>
                                            <div className="posts__cp__comment__body">
                                                {item.comment}
                                            </div>
                                            <div className="posts__cp__comment__bottom">
                                                {
                                                    // !user || user.id !== item.user_id ?
                                                    //     <Button size="small" onClick={() => handleToggleDialogReplyCommen(true, item.id)}>
                                                    //         Trả lời
                                                    //     </Button>
                                                    //     : ""
                                                }
                                            </div>
                                        </li>
                                    })
                                }
                            </li>


                        } else {
                            return <li key={item.id} className="posts__cp__comment">
                                <div className="posts__cp__comment__top">
                                    <div className="posts__cp__comment__image">
                                        <AvatarCircelShortText name={item.user.name} />
                                    </div>
                                    <div className="posts__cp__comment__user">
                                        <span>{user && user.id === item.user_id ? "Bạn" : item.user.name}</span>
                                        <span><AccessTimeIcon fontSize="small" />  {item ? distanceToNow(item.created_at) : ''}</span>
                                    </div>
                                </div>
                                <div className="posts__cp__comment__body">
                                    {item.comment}
                                </div>
                                <div className="posts__cp__comment__bottom">
                                    {
                                        !user || user.id !== item.user_id ?
                                            <Button size="small" onClick={() => handleToggleDialogReplyCommen(true, item.id)} >
                                                Trả lời
                                            </Button>
                                            : ""
                                    }
                                </div>
                            </li>
                        }

                    })
                    : ''
            }
        </ul>
    )
}

export default CommentsPost

