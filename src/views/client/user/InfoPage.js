import React from 'react';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

import "./user.scss";
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import Sidebar from "./Sidebar";


class InfoPage extends React.Component {
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
                                <h2 className="user__title">Thong tin tai khoan</h2>
                                <div className="user__info">
                                    <div className="user__col-2">
                                        <h3 className="user__field">Ho ten</h3>
                                        <p className="user__value">Nguyen dat</p>
                                    </div>
                                    <div className="user__col-2">
                                        <h3 className="user__field">So dien thoai</h3>
                                        <p className="user__value">012425345</p>
                                    </div>
                                    <div className="user__col-2">
                                        <h3 className="user__field">Dia chi</h3>
                                        <p className="user__value">123 bach dang quan binh thanh</p>
                                    </div>
                                    <div className="user__col-2">
                                        <h3 className="user__field">email</h3>
                                        <p className="user__value">Nguyendat@gmail.com</p>
                                    </div>
                                    <div className="group-btn-cart mt-5rem">
                                      <Link to="/edit-info">  <Button variant="contained" color="secondary" size="large" sx={{ marginRight: 1 }}>Chinh sua thong tin</Button></Link>
                                        <Button variant="contained" color="primary" size="large">Doi mat khau</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

        )
    }
}

export default InfoPage;