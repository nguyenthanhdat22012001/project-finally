import React from 'react';
// import Button from '@mui/material/Button';

import "../user.scss";
import Sidebar from "../components/Sidebar";
import TabFavoriteAndFollowPage from "../components/TabFavoriteAndFollow";


class FavoriteAndFollowPage extends React.Component {
    render() {
        return (
            <div className="wrapper_inner">
                <div className="user__wrapper">
                    <div className="user__col-left">
                        <Sidebar />
                    </div>
                    <div className="user__col-right">
                        <h2 className="user__title-page">Danh sách yêu thích và gian hàng đã theo dõi (1)</h2>
                        <TabFavoriteAndFollowPage />
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoriteAndFollowPage;