import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


InputQuantity.propTypes = {
    store_id: PropTypes.number,
    product_id: PropTypes.number,
    attribute_id: PropTypes.number,
    quantity: PropTypes.number,
    maxQuantity: PropTypes.number,
    handleUpdateQuantityProductInCart: PropTypes.func,
}

InputQuantity.defaultProps = {
    store_id: null,
    product_id: null,
    attribute_id: null,
    quantity: 1,
    maxQuantity: null,
    handleUpdateQuantityProductInCart: null,
}

function InputQuantity(props) {

    function handldeUp() {
        const newQty = props.quantity + 1;
        if (props.maxQuantity) {
            if (newQty > props.maxQuantity) {
                return;
            }
        } 
        props.handleUpdateQuantityProductInCart(props.store_id,props.product_id,props.attribute_id,newQty);
    }

    function handldeDown() {
            const newQty = props.quantity - 1;
            props.handleUpdateQuantityProductInCart(props.store_id,props.product_id,props.attribute_id,newQty);
    }

    return (
        <div className="inputUpDown">
            <IconButton aria-label="delete" size="small" onClick={handldeDown} >
                <RemoveIcon color="disabled" />
            </IconButton>
            <span className="inputUpDown__input">{props.quantity}</span>
            {/* <input className="inputUpDown__input" type="number" value={qty} min="1" /> */}
            <IconButton aria-label="delete" size="small" onClick={handldeUp}>
                <AddIcon color="disabled" />
            </IconButton>
        </div>
    );
}



export default InputQuantity

