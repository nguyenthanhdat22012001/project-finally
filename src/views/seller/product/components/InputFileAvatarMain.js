import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import "./InputFileAvatarMain.scss";
import emptyimage from 'assets/images/plus.png';

InputFileAvatarMain.propTypes = {
    handleChangeAvatar: PropTypes.func,
    avatar: PropTypes.string,
}
InputFileAvatarMain.defaultProps = {
    handleChangeAvatar: null,
    avatar: null,
}

export default function InputFileAvatarMain(props) {
    const { avatar, handleInputChange } = props;
    const [image, setImage] = useState(avatar  ? avatar  : emptyimage);
    
    useEffect(() => {
        if(avatar){
            setImage(avatar);
        }else{
            setImage(emptyimage);
        }

    }, [avatar])

    return (
        <div className="product-image">
            <label className="label">
                <input type="file" name="img" onChange={handleInputChange} />
                <figure className="product-figure">
                    <img src={image} className="product-avatar" alt="avatar" />
                    <figcaption className="product-figcaption">
                        <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="" />
                    </figcaption>
                </figure>
            </label>
        </div>
    );
}







