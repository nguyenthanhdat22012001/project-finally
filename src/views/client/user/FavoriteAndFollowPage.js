import React from 'react';
// import Button from '@mui/material/Button';

import "./user.scss";
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import Sidebar from "./Sidebar";
import TabFavoriteAndFollowPage from "./TabFavoriteAndFollow";


class FavoriteAndFollowPage extends React.Component {
    render() {
        return (
            <div className="client">
                <ScrollToTop />
                <Chat />
                <Header />
                <main className="client__inner">
                    <div className="wrapper_inner">
                        <div className="user__wrapper">
                            <div className="user__col-left">
                                <Sidebar />
                            </div>
                            <div className="user__col-right">
                                <h2 className="user__title">Danh sách yêu thích và gian hàng đã theo dõi (1)</h2>
                                <TabFavoriteAndFollowPage />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

        )
    }
}

export default FavoriteAndFollowPage;