import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
//api 
import postApi from "api/postApi";
//redux
import { useSelector } from 'react-redux';
//helper
import { scrollToTop } from 'helper/notify';

import "./PostPage.scss";
import PostItem from "../components/PostItem";

const baseUrl = '/client/posts';

function PostsUserPage() {
    const { id } = useParams();
    const user = useSelector(state => state.auth.user);
    /*******state********/
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState({
        limit: 9,
        currentPage: 1,
    });

    useEffect(async () => {
        await getPostsUser();
    }, [id])

    /******get post user******/
    const getPostsUser = async () => {
        try {
            const res = await postApi.getPostUser(id);
            if (res.success) {
                setPosts(res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }

    /******display posts by page******/
    const displayPosts = posts.slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
        return (
            <div className="posts__item">
                <PostItem
                    key={`${item.id}`}
                    post={item}
                    user_id={id}
                />
            </div>
        )
    })

    /*************handle change page**************/
    const handleChangePage = (event, value) => {
        setPages({
            ...pages,
            currentPage: value,
        });
        scrollToTop();
    };

    return (
        <div>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/client">
                        TADAHA
                    </Link>
                    <Typography color="text.primary">Bài viết</Typography>
                </Breadcrumbs>
            </div>
            <div className="posts__wrapper">
                <article className="posts__main">
                    <h2 className="posts__main__title">Danh sách bài viết của bạn</h2>
                    <div className="posts__main__header">
                        <p className="posts__main__countTotal">{[...posts].length} bài viết tìm thấy </p>
                        {
                            user ?
                                <Grid container spacing={1}>
                                    <Grid key={'sdad'} item xs={6}>
                                        <Link to={`${baseUrl}`}>
                                            <Button variant="contained" color="secondary" size="medium">Danh sách bài viết</Button>
                                        </Link>
                                    </Grid>
                                    <Grid key={'sdasaddf'} item xs={6}>
                                        <Link to={`${baseUrl}/create`}>
                                            <Button variant="contained" color="primary" size="medium">Đăng bài</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                                : ""
                        }
                    </div>
                    <div className="posts__main__body">
                        <div className="posts__list">
                            {
                                [...posts].length > 0 ?
                                    displayPosts
                                    : 'không có bài viết nào'
                            }
                        </div>
                    </div>
                    <div className="posts__paginion">
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil([...posts].length / pages.limit)}
                                color="secondary"
                                page={pages.currentPage}
                                onChange={handleChangePage}
                            />
                        </Stack>
                    </div>
                </article>
            </div>
        </div>
    );
}



export default PostsUserPage;
