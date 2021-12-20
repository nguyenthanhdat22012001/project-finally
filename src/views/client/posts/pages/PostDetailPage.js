import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
//api 
import postApi from "api/postApi";
//redux
import { useSelector } from 'react-redux';
// helper
import { handleNotiDialog } from 'helper/notify';
import { distanceToNow } from "helper/FormatDate";
// notify
import { useSnackbar } from 'notistack';


import "./PostDetailPage.scss";
import PostItem from "../components/PostItem";
import CommentsPost from "../components/CommentsPost";
import ReplyCommentDialog from "../components/ReplyCommentDialog";


function PostDetailPage(props) {
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    /********state *******/
    const [totalThumb, setTotalThumb] = useState(0);
    const [totalComment, setTotalComment] = useState(0);
    const [likePost, setLikePost] = useState(false);
    const [idPostReply, setIdPostReply] = useState(null);
    const [openDialogReplyComment, setOpenDialogReplyComment] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [textComment, setTextComment] = useState('');
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    /********param url *******/
    const { slug } = useParams();

    /***************load page****************/
    useEffect(() => {
        Promise.all([getPosts(),getPostDetail()]);
    }, [slug])
    /***************get post****************/
    const getPosts = async () => {
        try {
            const res = await postApi.getPostAll();
            if (res.success) {
                setPosts(res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    /***************get post detail ****************/
    const getPostDetail = async () => {
        try {
            const res = await postApi.getPostBySlug(slug);
            if (res.success) {
                setPost(res.data);
                await hanldeCheckUserLikePost(res.data.id);
                await getCommentOfPost(res.data.id);
                await getThumsUpOfPost(res.data.id);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************get list comment of post ****************/
    const getCommentOfPost = async (post_id) => {
        try {
            const res = await postApi.getComments(post_id);
            if (res.success) {
                setComments(res.data.listComment);
                setTotalComment(res.data.totalComment);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************get thumsUp of post ****************/
    const getThumsUpOfPost = async (post_id) => {
        try {
            const res = await postApi.getThumsUbByPost(post_id);
            if (res.success) {
                setTotalThumb(res.data.totalThumb);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************handle add commnet****************/
    const hanldeAddComment = async () => {
        if(!user){
            handleNotiDialog(enqueueSnackbar,"Bạn chưa đăng nhập", 'error');
            return;
        }
        if (textComment === '') {
            return
        }
        setBtnLoading(true);
        try {
            const data = {
                comment: textComment,
                user_id: user.id,
                post_id: post.id
            }
            const res = await postApi.addComments(data);
            if (res.success) {
                await getCommentOfPost(post.id);
                setTextComment('');
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            }
            setBtnLoading(false);
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************handle change input comment****************/
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setTextComment(value);
    }
    /***************handle Toggle dialog comment****************/
    const handleToggleDialogReplyCommen = (boolean = false, idPostReply = null) => {
        setOpenDialogReplyComment(boolean);
        setIdPostReply(idPostReply);
    }
    /***************handle reply comment****************/
    const hanldeReplyComment = async (textComment) => {
        if(!user){
            handleNotiDialog(enqueueSnackbar,"Bạn chưa đăng nhập", 'error');
            return;
        }
        if (textComment === '') {
            return
        }

        try {
            const data = {
                comment: textComment,
                user_id: user.id,
                post_id: post.id,
                parent_id: idPostReply
            }
            const res = await postApi.addComments(data);

            if (res.success) {
                let newComments = [...comments].map(item => {
                    if (item.id === idPostReply) {
                        item.sub_comments = [...item.sub_comments, res.data];
                    }
                    return item;
                });
                console.log('newComments', newComments);
                handleToggleDialogReplyCommen();
                setComments([res.data, ...comments]);
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************handle toggle like post****************/
    const hangleToggleLikePost = async () => {
        if(!user){
            handleNotiDialog(enqueueSnackbar,"Bạn chưa đăng nhập", 'error');
            return;
        }
        const islike = !likePost;
        const data = {
            user_id: user.id,
            post_id: post.id,
        };

        try {
            if (islike) {
                await postApi.likePost(data);
            } else {
                await postApi.removeLikePost(data);
            }
            setLikePost(true);
            getThumsUpOfPost(post.id);

        } catch (error) {
            console.log('error', error);
        }

    }
    /***************handle check user like post****************/
    const hanldeCheckUserLikePost = async (post_id) => {
        if (!user) {
            return;
        }
        try {
            const params = {
                user_id: user.id,
                post_id: post_id,
            };
            const res = await postApi.checkUserLikePost(params);
            if (res.success) {
                setLikePost(true);
            }

        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            <ReplyCommentDialog
                openDialogReplyComment={openDialogReplyComment}
                handleToggleDialogReplyCommen={handleToggleDialogReplyCommen}
                hanldeReplyComment={hanldeReplyComment}
            />
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                        MUI
                    </LinkBreadcrumbs>
                    <LinkBreadcrumbs
                        underline="hover"
                        color="inherit"
                        href="/getting-started/installation/"
                    >
                        Core
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">{post ? post.name : ''}</Typography>
                </Breadcrumbs>
            </div>
            <div className="posts__pdp__wrapper">
                <article className="posts__pdp__main">
                    <h2 className="posts__pdp__main__title"> {post ? post.name : ''} </h2>
                    <div className="posts__pdp__main__post-date">
                        <span><AccessTimeIcon fontSize="small" /> {post ? distanceToNow(post.created_at) : ''}</span>,
                        <span><PersonOutlineIcon fontSize="small" /> Nguyen dat</span>
                    </div>
                    <div className="posts__pdp__main__body">
                        <div className="posts__pdp__main__content">
                            <div dangerouslySetInnerHTML={{ __html: post ? post.description : '' }} />
                        </div>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Button
                                size="medium"
                                startIcon={<ThumbUpAltIcon />}
                                sx={{ color: `${likePost ? '#1976d2' : 'gray'}` }}
                                onClick={hangleToggleLikePost}
                            >
                                Thích {totalThumb}
                            </Button>
                            <div className="posts__pdp__total-comments">
                                <h4>{totalComment} bình luận</h4>
                            </div>
                        </Grid>
                        <div>
                            <TextField
                                fullWidth
                                multiline
                                margin="normal"
                                value={textComment}
                                onChange={handleInputChange}
                            />
                            <LoadingButton
                                variant="contained"
                                color="primary"
                                size="medium"
                                sx={{ margin: "15px 25px" }}
                                // loadingPosition="end"
                                loading={btnLoading}
                                onClick={hanldeAddComment}
                            >
                                Bình luận
                            </LoadingButton>
                        </div>
                        <CommentsPost
                            comments={comments}
                            handleToggleDialogReplyCommen={handleToggleDialogReplyCommen}
                        />
                    </div>
                </article>
                <div className="posts__pdp__sidebar">
                    <div className="posts__pdp__list">
                        {
                            [...posts].length > 0 ?
                                [...posts].map(item => {
                                    return <div key={item.id} className="posts__pdp__item">
                                        <PostItem key={item.id} post={item} />
                                    </div>
                                })
                                : 'không có bài viết nào'
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}



export default PostDetailPage

