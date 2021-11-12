import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';

FieldAttribute.propTypes = {
    id: PropTypes.number,
    hanldeDeleteFieldAttribute: PropTypes.func,
}
FieldAttribute.defaultProps = {
    id: null,
    hanldeDeleteFieldAttribute: null,
}
function FieldAttribute(props) {
    const {id,hanldeDeleteFieldAttribute} = props;
    return (
        <Grid container >
            <Grid item xs={12} sm={5} md={5} sx={{ pr: 4, pb: 4 }}>
                <TextField
                    required
                    fullWidth
                    id="attribute"
                    label="Thuộc Tính"
                    name="attribute"
                    autoComplete="attribute"
                />
            </Grid>

            <Grid item xs={12} sm={5} md={5} sx={{ pr: 4, pb: 4 }}>
                <TextField
                    required
                    fullWidth
                    type="number"
                    id="quanty"
                    label="Số Lượng"
                    name="quanty"
                    autoComplete="quanty"
                />
            </Grid>

            <Grid item xs={12} sm={2} md={2} sx={{ pr: 4, pb: 4 }}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
            }}
            >
                <IconButton  
                color="inherit"
                onClick={()=> hanldeDeleteFieldAttribute(id)}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </Grid>

        </Grid>
    )
}

export default FieldAttribute

