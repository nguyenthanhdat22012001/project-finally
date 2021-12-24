import React,{useState} from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


InputQuantity2.propTypes = {
    store_id: PropTypes.number,
    product_id: PropTypes.number,
    attribute_id: PropTypes.number,
    quantity: PropTypes.number,
    maxQuantity: PropTypes.number,
    handleUpdateQuantityProductInCart: PropTypes.func,
}

InputQuantity2.defaultProps = {
    store_id: null,
    product_id: null,
    attribute_id: null,
    quantity: 1,
    maxQuantity: null,
    handleUpdateQuantityProductInCart: null,
}

function InputQuantity2(props) {
    const [qty, setQty] = useState(props.quantity);

    function handldeUp() {
        const newQty = props.quantity + 1;
        if (newQty > props.maxQuantity) {
                return;  
        } 
        setQty(newQty);
        props.handleUpdateQuantityProductInCart(props.store_id,props.product_id,props.attribute_id,newQty);
    }

    function handldeDown() {
            const newQty = props.quantity - 1;
            setQty(newQty);
            props.handleUpdateQuantityProductInCart(props.store_id,props.product_id,props.attribute_id,newQty);
    }

    const handleOnchangeInput = (e) => {
        const target = e.target;
        const value = target.value;
        if (!isNaN(value)) {
            let newQty = value;
            if (newQty > props.maxQuantity) {
                newQty = props.maxQuantity;
            }
            if (newQty < 0) {
                newQty = 1;
            }
            setQty(newQty);
            props.handleUpdateQuantityProductInCart(props.store_id,props.product_id,props.attribute_id,newQty);
        }
    }


    return (
        <div className="inputUpDown">
            <IconButton aria-label="delete" size="small" onClick={handldeDown} >
                <RemoveIcon color="disabled" />
            </IconButton>
            {/* <span className="inputUpDown__input">{props.quantity}</span> */}
            <input className="inputUpDown__input" type="number" value={qty} min="1" onChange={handleOnchangeInput} />
            <IconButton aria-label="delete" size="small" onClick={handldeUp}>
                <AddIcon color="disabled" />
            </IconButton>
        </div>
    );
}



export default InputQuantity2

