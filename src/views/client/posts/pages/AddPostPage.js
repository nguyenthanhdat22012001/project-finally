import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link,useHistory } from 'react-router-dom';
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
import FormAddPost from "../components/FormAddPost";
import ProccessDialog from "components/dialog/ProccessDialog";

function AddPostPage(props) {
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    /*********state*********/
    const [isProccess, setIsProccess] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        await handleGetPost();
    }, [])

    /**********handle add post************/
    const handleAddPost = async (data) => {
        const newData = {
            ...data,
            user_id: user.id,
        }
        try {
            setIsProccess(true);

            const res = await postApi.addPost(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                //    await handleGetPost();
                history.goBack();
            }else{
                handleNotiDialog(enqueueSnackbar, res.message, 'error');  
            }
            setIsProccess(false);

        } catch (error) {
            console.log('error', error);
        }
    }
    /**********handle get post************/
    const handleGetPost = async () => {
        try {
            const res = await postApi.getPostAll();
            if (res.success) {
                setPosts(res.data);
            }

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
                    <Typography color="text.primary">Thêm bài viết</Typography>
                </Breadcrumbs>
            </div>
            <div className="posts__app__wrapper">
                <article className="posts__app__main">
                    <h2 className="posts__app__main__title">Thêm bài viết</h2>
                    <div className="posts__app__main__body">
                        <FormAddPost handleAddPost={handleAddPost} />
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



export default AddPostPage

