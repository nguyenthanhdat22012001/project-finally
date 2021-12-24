import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
//api
import storeApi from "api/storeApi";

import TableListStore from "../components/TableListStore";
import TableSkeleton from "components/skeleton/TableSkeleton";

function ListStorePage() {
    const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
    const [listStore, setListStore] = useState([]);

    /*************** loading page when get list payment ************/
    useEffect(async () => {
        await handleGetListUser();
    }, [])

    /************** handle get list user ***************/
    const handleGetListUser = async () => {
        try {

            if (isLoadFetchApiSuccess) {
                setIsLoadFetchApiSuccess(false);
            }

            const res = await storeApi.getAllStore();
            if (res.success) {
                setListStore(res.data);
            }
            setIsLoadFetchApiSuccess(true);

        } catch (error) {
            console.log('error: ' + error);
        }
    };


    return (
        <Grid container spacing={3}>
            {
                isLoadFetchApiSuccess ?
                    <TableListStore listStore={listStore} />
                    :
                    <TableSkeleton />
            }

        </Grid>
    );
}

export default ListStorePage;