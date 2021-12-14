import * as React from 'react';
import Grid from '@mui/material/Grid';


import ListMessage from "components/seller/message/ListMessage";
import FormMessage from "components/seller/message/FormMessage";


function MessagePage() {

    return (
        <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={3} >
                <ListMessage />
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
                <FormMessage />
            </Grid>

        </Grid>
    );
}

export default MessagePage;

