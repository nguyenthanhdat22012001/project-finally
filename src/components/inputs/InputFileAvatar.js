import {useState} from 'react';

import "./InputFileAvatar.scss";

export default function InputFileAvatar() {
    const [image , setImage] = useState('../assets/store-empty.png')

    const handleChange = (e)=>{
        console.log(e.target.file[0]);
        setImage(e.target.file[0]);
    }

    return (
        <div class="personal-image">
            <label class="label">
                <input type="file" onChange={handleChange} />
                <figure class="personal-figure">
                    <img src={image} class="personal-avatar" alt="avatar"/>
                    <figcaption class ="personal-figcaption">
                    <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" alt=""/>
                    </figcaption>
                </figure>
            </label>
        </div>
    );
}


