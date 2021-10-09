import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import StorefrontIcon from '@mui/icons-material/Storefront';


import "./ChekOutPage.scss";
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import Stepper from "./Stepper";

class ChekOutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openBackdrop: false,
            openDialog: false,
        }
    }

    handleToggleBackdrop = (boolean) => {
        this.setState({ openBackdrop: boolean });
    };

    handleToggleDialog = (boolean) => {
        this.setState({ openDialog: boolean });
    };

    handleOrderSuccess = () => {
        setTimeout(() => {
            this.setState({ openBackdrop: false });
            this.handleToggleDialog(true);
        }, 2000);

    }

    render() {
        return (
            <div className="client">
                <ScrollToTop />
                <Chat />
                <Header />
                <main className="client__inner">
                    <div>
                        <div role="presentation">
                            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
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
                                <Typography color="text.primary">detai</Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="row wrapper_inner">
                            <Stepper stepCart={1} />
                            <div className="checkout">
                                <div className="checkout__col">
                                    <h4 className="checkout__title">1. ĐỊA CHỈ THANH TOÁN VÀ GIAO HÀNG</h4>
                                    <div className="checkout__content">
                                        <h2 className="checkout__sub-title">Thông tin thanh toán</h2>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <TextField id="outlined-basic" margin="normal" label="Ho ten" variant="outlined" />
                                                <TextField id="outlined-basic" margin="normal" label="so dien thoai" variant="outlined" />
                                                <TextField id="outlined-basic" margin="normal" label="dia chi giao hang" variant="outlined" />
                                                <TextField id="outlined-basic" margin="normal" label="email" variant="outlined" />
                                            </FormControl>
                                        </Box>

                                        {/* <textarea placeholder="Ghi chu" rows="4"></textarea> */}
                                        <TextareaAutosize
                                            aria-label="Ghi chu"
                                            minRows={4}
                                            placeholder="Ghi chu"
                                        />
                                    </div>
                                </div>
                                <div className="checkout__col">
                                    <h4 className="checkout__title">2. THANH TOÁN</h4>
                                    <div className="checkout__content">
                                        <h2 className="checkout__sub-title">Phuong thuc Thanh toan</h2>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel id="demo-simple-select-label">Phuong thuc Thanh toan</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={'ttknh'}
                                                    label="Phuong thuc Thanh toan"
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value={'ttknh'}>Thanh toan khi nhan hang</MenuItem>
                                                    <MenuItem value={'ck'}>Chuyen khoan</MenuItem>
                                                    <MenuItem value={'ttmm'}>Thanh toan MOMO</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <h2 className="checkout__sub-title">Ma giam gia</h2>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel id="demo-simple-select-label">Ma giam gia</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={'ttknh'}
                                                    label="Ma giam gia"
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value={'ttknh'}>Giam 200k</MenuItem>
                                                    <MenuItem value={'ck'}>Chao Xuan 2021</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                                <div className="checkout__col">
                                    <h4 className="checkout__title">3. THÔNG TIN ĐƠN HÀNG</h4>
                                    <div className="checkout__content">
                                        <div className="checkout__order-info">
                                            <div className="checkout__order-box">
                                                <div className="checkout__order-store">
                                                    <StorefrontIcon />
                                                    <span>Coop food</span>
                                                </div>
                                                <div className="checkout__order">
                                                    <div className="checkout__order-img">
                                                        <img src="../assets/img1.jpg" alt="" />
                                                    </div>
                                                    <div className="checkout__order-content">
                                                        <h6 className="checkout__order-name">Đầm maxi dự tiệc hoa hồng - NH028 x 1190,0 Đầm maxi dự tiệc hoa hồng Đầm maxi dự tiệc hoa hồng</h6>
                                                        <div className="checkout__order-bottom">
                                                            <p className="checkout__order-quanty">
                                                                <span>Do</span> x <span>1</span>
                                                            </p>
                                                            <p className="checkout__order-price">
                                                                190,000 ₫
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout__order">
                                                    <div className="checkout__order-img">
                                                        <img src="../assets/img1.jpg" alt="" />
                                                    </div>
                                                    <div className="checkout__order-content">
                                                        <h6 className="checkout__order-name">Đầm maxi dự tiệc hoa hồng - NH028 x 1190,0 Đầm maxi dự tiệc hoa hồng Đầm maxi dự tiệc hoa hồng</h6>
                                                        <div className="checkout__order-bottom">
                                                            <p className="checkout__order-quanty">
                                                                <span>Do</span> x <span>1</span>
                                                            </p>
                                                            <p className="checkout__order-price">
                                                                190,000 ₫
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Box >
                                                    <FormControl fullWidth margin="normal">
                                                        <InputLabel id="demo-simple-select-label">Voucher</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={''}
                                                            label="Ma giam gia"
                                                        // onChange={handleChange}
                                                        >
                                                            <MenuItem value={''}>su dung voucher</MenuItem>
                                                            <MenuItem value={'ttknh'}>Giam 200k</MenuItem>
                                                            <MenuItem value={'ck'}>Chao Xuan 2021</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                                <div className="checkout__payment">
                                                    <span> Thành tiền</span>
                                                    <span className="checkout__used-coupon"> 590,000 ₫</span>
                                                    <span> 590,000 ₫</span>
                                                </div>
                                            </div>
                                            <div className="checkout__order-box">
                                                <div className="checkout__order-store">
                                                    <StorefrontIcon />
                                                    <span>Coop food</span>
                                                </div>
                                                <div className="checkout__order">
                                                    <div className="checkout__order-img">
                                                        <img src="../assets/img1.jpg" alt="" />
                                                    </div>
                                                    <div className="checkout__order-content">
                                                        <h6 className="checkout__order-name">Đầm maxi dự tiệc hoa hồng - NH028 x 1190,0 Đầm maxi dự tiệc hoa hồng Đầm maxi dự tiệc hoa hồng</h6>
                                                        <div className="checkout__order-bottom">
                                                            <p className="checkout__order-quanty">
                                                                <span>Do</span> x <span>1</span>
                                                            </p>
                                                            <p className="checkout__order-price">
                                                                190,000 ₫
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout__order">
                                                    <div className="checkout__order-img">
                                                        <img src="../assets/img1.jpg" alt="" />
                                                    </div>
                                                    <div className="checkout__order-content">
                                                        <h6 className="checkout__order-name">Đầm maxi dự tiệc hoa hồng - NH028 x 1190,0 Đầm maxi dự tiệc hoa hồng Đầm maxi dự tiệc hoa hồng</h6>
                                                        <div className="checkout__order-bottom">
                                                            <p className="checkout__order-quanty">
                                                                <span>Do</span> x <span>1</span>
                                                            </p>
                                                            <p className="checkout__order-price">
                                                                190,000 ₫
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Box >
                                                    <FormControl fullWidth margin="normal">
                                                        <InputLabel id="demo-simple-select-label">Voucher</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={''}
                                                            label="Ma giam gia"
                                                        // onChange={handleChange}
                                                        >
                                                            <MenuItem value={''}>su dung voucher</MenuItem>
                                                            <MenuItem value={'ttknh'}>Giam 200k</MenuItem>
                                                            <MenuItem value={'ck'}>Chao Xuan 2021</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                                <div className="checkout__payment">
                                                    <span> Thành tiền</span>
                                                    <span className="checkout__used-coupon"> 590,000 ₫</span>
                                                    <span> 590,000 ₫</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="checkout__payment">
                                            <span> phi ship</span>
                                            <span> 18,000 ₫</span>
                                        </div>
                                        <div className="checkout__payment checkout__total-payment">
                                            <span> Thanh toán</span>
                                            <span> 590,000 ₫</span>
                                        </div>
                                        <div className="checkout__btn">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                onClick={
                                                    () => {
                                                        this.handleToggleBackdrop(true);
                                                        this.handleOrderSuccess()
                                                    }
                                                }
                                            >Dat hang</Button>
                                        </div>
                                        <Backdrop
                                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                            open={this.state.openBackdrop}
                                        >
                                            <CircularProgress color="inherit" />
                                        </Backdrop>

                                        <Dialog
                                            open={this.state.openDialog}
                                            maxWidth="md"
                                            onClose={() => this.handleToggleDialog(false)}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Chuc mung ban da dat hang thanh cong
                                                </DialogContentText>
                                            </DialogContent>
                                        </Dialog>
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

export default ChekOutPage;