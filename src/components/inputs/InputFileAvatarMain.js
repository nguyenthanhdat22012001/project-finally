import {useState} from 'react';

import "./InputFileAvatarMain.scss";
import emptyimage from 'assets/images/plus.png';

export default function InputFileAvatarMain() {
    const [image , setImage] = useState(emptyimage);

    const handleChange = (e)=>{
        let fileImage = URL.createObjectURL(e.target.files[0]);
            console.log(fileImage);
         setImage(fileImage);
    }

    return (
        <div class="product-image">
            <label class="label">
                <input type="file" onChange={handleChange} />
                <figure class="product-figure">
                    <img src={image} class="product-avatar" alt="avatar"/>
                    <figcaption class ="product-figcaption">
                    <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt=""/>
                    </figcaption>
                </figure>
            </label>
        </div>
    );
}


