import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


InputQuantity.propTypes = {
    quantity: PropTypes.number,
    maxQuantity: PropTypes.number,
    handldeSetQuantityAttribute: PropTypes.func,
}

InputQuantity.defaultProps = {
    quantity: 1,
    maxQuantity: null,
    handldeSetQuantityAttribute: null,
}

function InputQuantity(props) {
    const [qty, setQty] = useState(props.quantity);

    function handldeUp() {
        const newQty = qty + 1;
        if (props.maxQuantity) {
            if (newQty > props.maxQuantity) {
                return;
            }
        } 
        setQty(newQty);
        props.handldeSetQuantityAttribute(newQty);
    }

    function handldeDown() {
        if (qty > 1) {
            const newQty = qty - 1;
            setQty(newQty);
            props.handldeSetQuantityAttribute(newQty)
        }

    }

    return (
        <div className="inputUpDown">
            <IconButton aria-label="delete" size="small" onClick={handldeDown} >
                <RemoveIcon color="disabled" />
            </IconButton>
            <span className="inputUpDown__input">{qty}</span>
            {/* <input className="inputUpDown__input" type="number" value={qty} min="1" /> */}
            <IconButton aria-label="delete" size="small" onClick={handldeUp}>
                <AddIcon color="disabled" />
            </IconButton>
        </div>
    );
}



export default InputQuantity

