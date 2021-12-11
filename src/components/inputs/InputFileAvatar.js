import { useState } from 'react';

import "./InputFileAvatar.scss";
import AvatarEpty from "assets/images/store-empty.png"


export default function InputFileAvatar(props) {
    const [image, setImage] = useState(!props.image ? AvatarEpty : props.image);

    const handleChange = (e) => {
      let fileImage = e.target.files[0];
        createImage(fileImage);
         props.handleChangeImage(fileImage);
    }

    const createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }

    return (
        <form action="popup.php" method="post" id="myForm" name="myForm" enctype="multipart/form-data">
        <div className="personal-image">
            <label className="label">
                <input type="file" onChange={handleChange} />
                <figure className="personal-figure">
                    <img src={props.image ? URL.createObjectURL(image) : image} className="personal-avatar" alt="avatar" />
                    <figcaption className="personal-figcaption">
                        <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt="" />
                    </figcaption>
                </figure>
            </label>
        </div>
        </form>
    );
}


