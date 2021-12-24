import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from "react-router-dom";
//api
import categoryApi from 'api/categoryApi';
import brandApi from 'api/brandApi';

import "./Product.scss";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const baseUrl = "/client/product/category";

const rating = [5, 4, 3, 2, 1];

Sidebar.propTypes = {
    handleChangeInput: PropTypes.func,
  };

function Sidebar(props) {
    const {handleChangeInput} = props;
    /********state**************/
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        Promise.all([getAllCategory(), getAllBrand()]);
    }, [])

    /*************get all category**************/
    const getAllCategory = async () => {
        try {
            const res = await categoryApi.getCategory();
            console.log('res', res);
            if (res.success) {
                setCategories([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    /*************get all brand**************/
    const getAllBrand = async () => {
        try {
            const res = await brandApi.getBrandAll();
            console.log('res', res);
            if (res.success) {
                setBrands([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <div className="product__sidebar__inner">
            <div className="row product__sidebar__category">
                <h4 className="product__sidebar__title">Danh Mục</h4>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    {
                        [...categories].length > 0 ?
                            [...categories].map(item => {
                                return (
                                    <NavLink key={item.id} to={`${baseUrl}/${item.slug}`} exact activeClassName="nav-active">
                                        <ListItem button>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    </NavLink>
                                )
                            })
                            : ""
                    }
                </List>
            </div>
            <div className="row product__sidebar__brand">
                <h4 className="product__sidebar__title">Thương hiệu</h4>
                <FormGroup>
                    {
                        [...brands].length > 0 ?
                            [...brands].map(item => {
                                return (
                                    <FormControlLabel
                                        key={item.id}
                                        control={<Checkbox
                                            name="brand_id"
                                            value={item.id}
                                            onChange={handleChangeInput}
                                        />}
                                        label={item.name} />
                                )
                            })
                            : ""
                    }
                </FormGroup>
            </div>
        </div>
    );
}



export default Sidebar;
