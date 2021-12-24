import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link,useHistory, useParams } from 'react-router-dom';
// api 
import postApi from "api/postApi";
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";
//redux
import { useSelector } from "react-redux";


import "./AddPostPage.scss";
import PostItem from "../components/PostItem";
import FormEditPost from "../components/FormEditPost";
import ProccessDialog from "components/dialog/ProccessDialog";

function EditPostPage(props) {
    const { slug } = useParams();
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    /*********state*********/
    const [isProccess, setIsProccess] = useState(false);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    /***************load page****************/
    useEffect(() => {
        Promise.all([handleGetPostUser(), getPostDetail()]);
    }, [slug])

    /**********handle get post************/
    const handleGetPostUser = async () => {
        try {
            const res = await postApi.getPostUser(user.id);
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
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    /**********handle add post************/
    const handleUpdatePost = async (id,data) => {
        const newData = {
            ...data,
            user_id: user.id,
        }
        try {
            setIsProccess(true);

            const res = await postApi.updatePost(id,newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                await handleGetPostUser();
                // history.goBack();
            }else{
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
            setIsProccess(false);

        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <div>
            {isProccess && <ProccessDialog />} {/* proccess page */}
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/client">
                        TADAHA
                    </Link>
                    <Link to="/client/posts">
                        Bài viết
                    </Link>
                    <Typography color="text.primary">{post ? post.name : ""}</Typography>
                </Breadcrumbs>
            </div>
            <div className="posts__app__wrapper">
                <article className="posts__app__main">
                    <h2 className="posts__app__main__title">Chỉnh sửa bài viết</h2>
                    <div className="posts__app__main__body">
                        <FormEditPost 
                        handleUpdatePost={handleUpdatePost} 
                        post={post}
                        />
                    </div>
                </article>
                <div className="posts__app__sidebar">
                    <div className="posts__app__list">
                        {
                            [...posts].length > 0 ?
                                [...posts].map(item => {
                                    return (
                                        <div key={item.id} className="posts__app__item">
                                            <PostItem post={item} />
                                        </div>
                                    )
                                })
                                : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



export default EditPostPage

