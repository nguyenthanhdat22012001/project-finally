import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import ListComment from 'components/seller/comment/ListComment';


function CommentProductPage() {
    return (
        <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={3} >
                <Button sx={{ alignItems: 'flex-start' }}>
                    <Rating size="small" name="read-only" value={5} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        32 Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }}>
                    <Rating size="small" name="read-only" value={4} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        32 Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }}>
                    <Rating size="small" name="read-only" value={3} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        32 Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }}>
                    <Rating size="small" name="read-only" value={2} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        32 Bình luận
                    </Typography>
                </Button>
                <Button sx={{ alignItems: 'flex-start' }}>
                    <Rating size="small" name="read-only" value={1} readOnly sx={{ marginRight: '5px' }} />
                    <Typography variant="caption" display="block" gutterBottom>
                        32 Bình luận
                    </Typography>
                </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
                <ListComment />
            </Grid>

        </Grid>
    );
}

export default CommentProductPage;

