// import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import "./UploadAndDeleteFile.scss";

export default function UploadAndDeleteFile({urlImage,handleDeleteListImage}) {

    return (
        <div class="UploadAndDeleteFile">
            <img src={urlImage} alt="" />
            <IconButton 
            onClick={()=>handleDeleteListImage(urlImage)}
            className="UploadAndDeleteFile__delete" 
            aria-label="upload picture" 
            component="span"
            >
                <CloseIcon color="error" />
            </IconButton>
        </div>
    );
}


