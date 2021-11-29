import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import Button from '@mui/material/Button';


import "./AddPostPage.scss";
import PostItem from "../components/PostItem";
import TextAreaFroala from "components/textarea/TextAreaFroala";

function AddPostPage(props) {
    return (
        <div>
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
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Tiêu đề bài viết
                        </Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Tiêu đề bài viết"
                            variant="outlined"
                        />
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Mô tả bài viết
                        </Typography>
                        <TextAreaFroala />
                        <Button variant="contained" color="primary" size="medium" sx={{margin: "30px 25px"}}>
                            Đăng bài viết
                        </Button>
                    </div>
                </article>
                <sidebar className="posts__app__sidebar">
                    <div className="posts__app__list">
                        <div className="posts__app__item">
                            <PostItem />
                        </div>
                    </div>
                </sidebar>
            </div>
        </div>
    )
}



export default AddPostPage

