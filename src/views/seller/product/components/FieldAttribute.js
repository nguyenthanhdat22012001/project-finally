import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { ErrorMessage } from '@hookform/error-message';

FieldAttribute.propTypes = {
    editAttributes: PropTypes.array,
    handleChangeAttributes: PropTypes.func,
    hanldeAddFieldAttribute: PropTypes.func,
    hanldeDeleteFieldAttribute: PropTypes.func,
}
FieldAttribute.defaultProps = {
    editAttributes: [],
}


function FieldAttribute(props) {
    const { register, errors,editAttributes,hanldeAddFieldAttribute,hanldeDeleteFieldAttribute } = props;
    const [attributes, setAttributes] = useState([]);

    useEffect(() => {  
        setAttributes(editAttributes);
    }, [editAttributes])


    return (
        <Box component="div" fullWidth >
            {console.log('attributes',attributes)}
            {
                [...attributes].length > 0 ?
                    [...attributes].map((item, index) => {
                        const fieldName = `attributes[${index}]`;

                        return (<Grid container name={fieldName} key={fieldName} >
                            <Grid item xs={12} sm={5} md={5} sx={{ pr: 4, pb: 4 }}>
                                <TextField
                                    autoFocus
                                    fullWidth
                                    label="Thuộc Tính"
                                    defaultValue={item.name}
                                    // value={item.name}
                                    {...register(`attributes.${index}.name`)}
                                helperText={errors.attributes && errors.attributes[index]?.name ? `${errors.attributes[index].name?.message}` : ""}
                                error={errors.attributes && errors.attributes[index]?.name ? true : false}
                                // onChange={handleChangeAttributes}
                                />
                            </Grid>

                            <Grid item xs={12} sm={5} md={5} sx={{ pr: 4, pb: 4 }}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Số Lượng"
                                    defaultValue={item.name}
                                    // value={item.quantity}
                                    {...register(`attributes.${index}.quantity`)}
                                helperText={errors.attributes && errors.attributes[index]?.quantity ? `${errors.attributes[index].quantity?.message}` : ""}
                                error={errors.attributes && errors.attributes[index]?.quantity ? true : false}
                                // onChange={handleChangeAttributes}
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
                                    onClick={hanldeDeleteFieldAttribute(index)}
                                >
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </Grid>

                        </Grid>
                        );
                    })
                    : ""
            }
            <Grid item xs={12}>
                <Button
                    onClick={hanldeAddFieldAttribute}
                    variant="contained"
                    size="small"
                >
                    Thêm Thuộc Tính
                </Button>
            </Grid>
        </Box>
    )
}

export default FieldAttribute

