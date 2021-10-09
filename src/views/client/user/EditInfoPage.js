import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';

import "./user.scss";
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import Sidebar from "./Sidebar";


class EditInfoPage extends React.Component {
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
                                <h2 className="user__title">Chinh sua thong tin tai khoan</h2>
                                <FormControl>
                                    <div className="user__info">
                                        <div className="user__col-2">
                                            <TextField id="outlined-basic" margin="normal" label="Ho ten" defaultValue="Nguyen dat" variant="outlined" />
                                        </div>
                                        <div className="user__col-2">
                                            <TextField id="outlined-basic" margin="normal" label="So dien thoai" defaultValue="012425345" variant="outlined" />
                                        </div>
                                        <div className="user__col-2">
                                            <TextField id="outlined-basic" margin="normal" label="Dia chi" defaultValue="123 bach dang quan binh thanh" variant="outlined" />
                                        </div>
                                        <div className="user__col-2">
                                            <TextField id="outlined-basic" margin="normal" label="email" defaultValue="Nguyendat@gmail.com" variant="outlined" />
                                        </div>
                                        <div className="group-btn-cart mt-5rem" style={{ width: '100%' }}>
                                            <Button variant="contained" color="primary" size="large">Chinh sua</Button>
                                        </div>
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

        )
    }
}

export default EditInfoPage;