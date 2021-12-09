import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
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
    const [isProccess, setIsProccess] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

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
            console.log('res', res);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            {isProccess && <ProccessDialog />} {/* proccess page */}
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
                        <div className="posts__app__item">
                            <PostItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AddPostPage

