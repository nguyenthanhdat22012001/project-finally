import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
//api
import productApi from "api/productApi";

import ListComment from '../components/ListComment';


function CommentProductPage() {
    const { id } = useParams();
    /*******state*******/
    const [filterComment, setFilterComment] = useState({
        isFilter: false,
        pointFilter: null,
        commentFilter: [],
    });
    const [comments, setComments] = useState({
        listComment: [],
        totalComment: 0,
    });

    /***************load page****************/
    useEffect(() => {
        Promise.all([handleGetListComments(id)]);
    }, [id])

    /***************handle get list comment****************/
    const handleGetListComments = async (id) => {
        try {
            const res = await productApi.getCommentRating(id);
            if (res.success) {
                setComments({
                    listComment: res.data.listComment,
                    totalComment: res.data.totalComment,
                });
                if(filterComment.isFilter){
                    handleSetFilterCommentByPoin(filterComment.pointFilter,res.data.listComment);
                }
               
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /*********handle set filter comment by point*******/
    const handleSetFilterCommentByPoin = (point,listComment = comments.listComment) => {
        const newComments = [...listComment].filter(item => item.point === point)
        setFilterComment({
            ...filterComment,
            isFilter: true,
            pointFilter: point,
            commentFilter: newComments,
        });
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} >
                <Button sx={{ alignItems: 'flex-start' }} onClick={() => handleSetFilterCommentByPoin(5)}>
                    <Rating size="small" name="read-only" value={5} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        {[...comments.listComment].filter(item => item.point === 5).length} Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }} onClick={() => handleSetFilterCommentByPoin(4)}>
                    <Rating size="small" name="read-only" value={4} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                    {[...comments.listComment].filter(item => item.point === 4).length} Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }} onClick={() => handleSetFilterCommentByPoin(3)}>
                    <Rating size="small" name="read-only" value={3} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                    {[...comments.listComment].filter(item => item.point === 3).length} Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }} onClick={() => handleSetFilterCommentByPoin(2)}>
                    <Rating size="small" name="read-only" value={2} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                    {[...comments.listComment].filter(item => item.point === 2).length} Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }} onClick={() => handleSetFilterCommentByPoin(1)}>
                    <Rating size="small" name="read-only" value={1} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                    {[...comments.listComment].filter(item => item.point === 1).length} Bình luận
                    </Typography>
                </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
                <ListComment
                    listComment={comments.listComment}
                    handleGetListComments={handleGetListComments}
                    product_id={id}
                    filterComment={filterComment}
                />
            </Grid>

        </Grid>
    );
}

export default CommentProductPage;

