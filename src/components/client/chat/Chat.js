import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import ForumIcon from '@mui/icons-material/Forum';

import "./Chat.scss";
import imageProduct from "assets/images/img1.jpg";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpentChat: false }
    }

    handleOpenChat = () => {
        let open = !this.state.isOpentChat;
        this.setState({ isOpentChat: open });
    }

    render() {
        let isOpenChat = this.state.isOpentChat;
        return (
            <div className={isOpenChat ? "chat active-chat" : 'chat close-chat'}>
                {!isOpenChat &&
                        <div className="chat__button" onClick={this.handleOpenChat}>
                            <ForumIcon />
                            <h3>Nhan Tin</h3>
                        </div>
                }
                <div className="chat__header">
                    <h3 className="chat__title">Tin Nhan</h3>
                    <div className="chat__list-store">
                        <div className="chat__list-item">
                            <div className="chat__list-img">
                                <img src={imageProduct} alt="" />
                            </div>
                            <div className="chat__list-desc">
                                <div className="chat__desc-box">
                                    <div className="chat__desc-name">
                                        Nhat tin food
                                    </div>
                                    <div className="chat__desc-date">
                                        ysterday
                                    </div>
                                </div>
                                <div className="chat__desc-box">
                                    <div className="chat__desc-chat">
                                        ban bam huy don va mua lai don hang moi nhe   ban bam huy don va mua lai don hang moi nhe
                                    </div>
                                    <div className="chat__desc-icon">
                                        <IconButton aria-label="delete" size="small"  >
                                            <DeleteIcon color="disabled" />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat__body">
                    <div className="chat__body-top">
                        <h3 className="chat__title">Tadahaha</h3>
                        <IconButton
                            variant="contained"
                            size='medium'
                            onClick={this.handleOpenChat}
                        >
                            <CloseIcon color='disabled' />
                        </IconButton>
                    </div>

                    <div className="chat__box">
                        <div className="chat__load-top">
                            <CircularProgress
                                disableShrink={true}
                                size={20}
                                sx={{ color: '#ccc' }}
                            />
                        </div>
                        <div className="chat__content">
                            <div className="chat__date">
                                04/10 16:07
                            </div>
                        </div>
                        <div className="chat__content">
                            <div className="chat__avatar">
                                <img src={imageProduct} alt="" />
                            </div>
                            <div className="chat__message">
                                Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                            </div>
                        </div>
                        <div className="chat__content chat__content-reverse">
                            <div className="chat__avatar">
                                <img src={imageProduct} alt="" />
                            </div>
                            <div className="chat__message">
                                Unknown message type, please check it on App.
                            </div>
                        </div>
                    </div>
                    <div className="chat__box-form">
                        <div className="chat__input-form">
                            <textarea row='1'></textarea>
                        </div>
                        <div className="chat__icon-send">
                            <IconButton variant="contained" size='large'>
                                <SendIcon color='disabled' />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Chat;