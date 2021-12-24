import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
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
//helper
import { scrollToTop } from 'helper/notify';

import "./PostPage.scss";
import PostItem from "../components/PostItem";
import ProccessDialog from "components/dialog/ProccessDialog";

const baseUrl = '/client/posts';

function PostsPage() {
    const user = useSelector(state => state.auth.user);
    /*******state********/
    const [isProccess, setIsProccess] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState({
        limit: 9,
        currentPage: 1,
    });
    const [filterPost, setFilterPost] = useState({
        isFilter: false,
        postFiltered: [],
    });

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

    /******display product by page******/
    let displayPosts = '';
    if (filterPost.isFilter) {
        displayPosts = [...filterPost.postFiltered].slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
            return (
                <div className="posts__item">
                    <PostItem key={item.id} post={item} />
                </div>
            )
        })
    } else {
        displayPosts = posts.slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
            return (
                <div className="posts__item">
                    <PostItem key={item.id} post={item} />
                </div>
            )
        })
    }

    /*************handle change page**************/
    const handleChangePage = (event, value) => {
        setPages({
            ...pages,
            currentPage: value,
        });
        scrollToTop();
    };

    /*************handle change page**************/
    const handleChangeInputSearch = (e) => {
        const value = e.target.value;
        setTextSearch(value);
    };
    /*************handle search post **************/
    const handleOnSearch = () => {
        try {
            setIsProccess(true);
            const newPosts = [...posts].filter(item => item.name.toLowerCase().includes(textSearch.toLowerCase()));
            setFilterPost({
                isFilter: true,
                postFiltered: newPosts,
            });
            setIsProccess(false);

        } catch (error) {
            console.log('error', error);
        }
    };


    return (
        <div>
            {isProccess && <ProccessDialog />} {/* proccess page */}
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
                    <h2 className="posts__main__title">Danh sách bài viết</h2>
                    <div className="posts__main__header">
                        <p className="posts__main__countTotal">{filterPost.isFilter ? [...filterPost.postFiltered].length : [...posts].length} bài viết tìm thấy </p>
                        {
                            user ?
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Link to={`${baseUrl}/user/${user?.id}`}>
                                            <Button variant="contained" color="secondary" size="medium">Bài viết của tôi</Button>
                                        </Link>
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
                            <input type="text" className="posts__search__input" value={textSearch} onChange={handleChangeInputSearch} />
                            <Button onClick={handleOnSearch} variant="contained" color="primary" size="small" sx={{ borderRadius: "30%" }}>
                                <IconButton size="small">
                                    <SearchIcon sx={{ color: "#fff" }} />
                                </IconButton>
                            </Button>
                        </div>
                        <div className="posts__list">
                            {
                                [...posts].length > 0 ?
                                    // [...posts].map(item => {
                                    //     return <div className="posts__item">
                                    //         <PostItem key={item.id} post={item} />
                                    //     </div>
                                    // })
                                    displayPosts
                                    : 'không có bài viết nào'
                            }
                        </div>
                    </div>
                    <div className="posts__paginion">
                        <Stack spacing={2}>
                            <Pagination
                                count={filterPost.isFilter ? Math.ceil([...filterPost.postFiltered].length / pages.limit) : Math.ceil([...posts].length / pages.limit)}
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



export default PostsPage;
