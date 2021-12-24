import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
//api
import userApi from "api/userApi";

import TableListUser from "../components/TableListUser";
import TableSkeleton from "components/skeleton/TableSkeleton";

function ListMemberAdminPage() {
    const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
    const [listUser, setListUser] = useState([]);

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

            const res = await userApi.getUsers();
            if (res.success) {
                setListUser(res.data);
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
                    <TableListUser listUser={listUser} />
                    :
                    <TableSkeleton />
            }

        </Grid>
    );
}

export default ListMemberAdminPage;