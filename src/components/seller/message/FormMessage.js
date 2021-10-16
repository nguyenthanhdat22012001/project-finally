import React from 'react';
// import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

import "./FormMessage.scss";
import AvatarCircelShortText from "../../../components/avatar/AvatarCircelShortText";

function FormMessage(props) {
    return (
        <div className="FormMessage">
            <div className="FormMessage__box">
                <div className="FormMessage__load">
                    <CircularProgress
                        disableShrink={true}
                        size={20}
                        sx={{ color: '#ccc' }}
                    />
                </div>
                <div className="FormMessage__content">
                    <div className="FormMessage__date">
                        04/10 16:07
                    </div>
                </div>
                <div className="FormMessage__content">
                    <div className="FormMessage__avatar">
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="FormMessage__message">
                        Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                    </div>
                </div>
                <div className="FormMessage__content FormMessage__content-reverse">
                    <div className="FormMessage__avatar">
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="FormMessage__message">
                        Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                    </div>
                </div>
                <div className="FormMessage__content">
                    <div className="FormMessage__avatar">
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="FormMessage__message">
                        Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                    </div>
                </div>
                <div className="FormMessage__content FormMessage__content-reverse">
                    <div className="FormMessage__avatar">
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="FormMessage__message">
                        Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                    </div>
                </div>
                <div className="FormMessage__content">
                    <div className="FormMessage__avatar">
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="FormMessage__message">
                        Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                    </div>
                </div>
                <div className="FormMessage__content FormMessage__content-reverse">
                    <div className="FormMessage__avatar">
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="FormMessage__message">
                        Unknown message type, please check it on App.Unknown message type, please check it on App. Unknown message type, please check it on App.
                    </div>
                </div>
            </div>
            <div className="FormMessage__box-form">
                <div className="FormMessage__input-form">
                    <textarea row='1'></textarea>
                </div>
                <div className="FormMessage__icon-send">
                    <IconButton variant="contained" size='large'>
                        <SendIcon color='primary' />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

FormMessage.propTypes = {

}

export default FormMessage

