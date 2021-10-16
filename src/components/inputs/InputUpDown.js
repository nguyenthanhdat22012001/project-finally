import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


InputUpDown.propTypes = {
    quanty: PropTypes.number
}

InputUpDown.defaultProps ={
    quanty: 1
}

function InputUpDown(props) {
    const [qty , setQty] = useState(props.quanty);

    function handldeUp() {
        console.log('qty ',qty);
        setQty(qty + 1);
    }

    function handldeDown() {
        if(qty > 1){
            setQty(qty - 1);
        }
       
    }

    return (
        <div className="inputUpDown">
        <IconButton aria-label="delete" size="small"  onClick={handldeDown} >
            <RemoveIcon color="disabled" />
        </IconButton>
        <input className="inputUpDown__input" type="number" value={qty} min="1" />
        <IconButton aria-label="delete" size="small" onClick={handldeUp}>
            <AddIcon color="disabled" />
        </IconButton>
    </div>
    );
}



export default InputUpDown

