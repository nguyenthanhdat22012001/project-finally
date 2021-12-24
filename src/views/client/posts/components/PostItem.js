import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
//api 
import postApi from "api/postApi";

import "./PostItem.scss";
import ProccessDialog from "components/dialog/ProccessDialog";
import ConfirmDialog from 'components/dialog/ConfirmDialog';

PostItem.propTypes = {
    post: PropTypes.object,
    user_id: PropTypes.string,
}
PostItem.defaultProps = {
    post: null,
    user_id: null,
}

const baseUrl = '/client/posts';

function PostItem(props) {
    const { post, user_id } = props;
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    /*******state*******/
    const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false , idDelete: null });
    const [isProccess, setIsProccess] = useState(false);

    /*************handle delete post**************/
    const deletePostById = async (id) => {
        try {
            setIsProccess(true);
            const res = await postApi.deletePost(id);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                // history.push(`${baseUrl}/user/${user_id}`)
                window.location.href = `${baseUrl}/user/${user_id}`;
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
            setIsProccess(false);
        } catch (error) {
            console.log('error', error);
        }
    }

    /************** handle report delete dialogDelete ***************/
    const hanldeReportDeleteDialog = (openDialog, message = '', id = null) => {
        setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message, idDelete: id });
    }
    /************** handle accept delete dialogDelete ***************/
    const hanldeAcceptDelete = () => {
        hanldeReportDeleteDialog(false);
        deletePostById(dialogDelete.idDelete);
    }

    return (
        <div className="post__box">
            {isProccess && <ProccessDialog />} {/* proccess page */}
            {
                user_id ?
                    <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '5px' }}>
                        <IconButton  onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa bài viết: "${post.name}" ?`,post.id)}>
                            <CloseIcon sx={{ color: "gray", cursor: 'pointer' }} fontSize='small' />
                        </IconButton>
                        <Link to={`${baseUrl}/edit/${post.slug}`}>
                            <EditIcon sx={{ color: "gray", cursor: 'pointer' }} fontSize='small' />
                        </Link>
                    </Grid> : ""
            }
            <Link to={`/client/posts/${post ? post.slug : ''}.html`}>
                <h4 className="post__title">
                    {post ? post.name : ''}
                </h4>
            </Link>
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
            {/* dialogDelete delete */}
            <ConfirmDialog
                dialogDelete={dialogDelete}
                hanldeReportDeleteDialog={hanldeReportDeleteDialog}
                hanldeAcceptDelete={hanldeAcceptDelete}
            />
        </div>
    )
}



export default PostItem

