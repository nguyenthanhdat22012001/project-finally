import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
//api 
import postApi from "api/postApi";
//redux
import { useSelector } from 'react-redux';

import "./PostPage.scss";
import PostItem from "../components/PostItem";


function ProductPage() {
    const user = useSelector(state => state.auth.user);
    /*******state********/
    const [posts, setPosts] = useState([]);
    useEffect(() => {
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
        getPosts();
    }, [])


    return (
        <div>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkBreadcrumbs underline="hover" color="inherit">
                        <Link to="/client">
                            TADAHA
                        </Link>
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">Bài viết</Typography>
                </Breadcrumbs>
            </div>
            <div className="posts__wrapper">
                <article className="posts__main">
                    <h2 className="posts__main__title">Danh sách bài viết</h2>
                    <div className="posts__main__header">
                        <p className="posts__main__countTotal">{[...posts].length} bài viết tìm thấy </p>
                        {
                            user ?
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Button variant="contained" color="secondary" size="medium">Bài viết của tôi</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link to="/client/posts/create">
                                            <Button variant="contained" color="primary" size="medium">Đăng bài</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                                : ""
                        }

                    </div>
                    <div className="posts__main__body">
                        <div className="posts__search">
                            <input type="text" className="posts__search__input" />
                            <Button variant="contained" color="primary" size="small" sx={{ borderRadius: "30%" }}>
                                <IconButton size="small">
                                    <SearchIcon sx={{ color: "#fff" }} />
                                </IconButton>
                            </Button>
                        </div>
                        <div className="posts__list">
                            {
                                [...posts].length > 0 ?
                                    [...posts].map(item => {
                                        return <div className="posts__item">
                                            <PostItem key={item.id} post={item} />
                                        </div>
                                    })
                                    : 'không có bài viết nào'
                            }
                        </div>
                    </div>
                    <div className="posts__paginion">
                        <Stack spacing={2}>
                            <Pagination count={10} color="secondary" />
                        </Stack>
                    </div>
                </article>
            </div>
        </div>
    );
}



export default ProductPage;
