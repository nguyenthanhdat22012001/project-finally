import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//api
import productApi from "api/productApi";

import "./ProductPage.scss";
import Sidebar from "../components/Sidebar";
import Product from "../components/Product";
import Mystore from "../components/Mystore";
import ProductSkeleton from "../components/ProductSkeleton";


function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleCallApiGetProduct();
    }, []);
    /***********handle call api get products*************/
    const handleCallApiGetProduct = async () => {

        try {
            const res = await productApi.getAllProducts();
            console.log('getAllProducts', res);
            setProducts(res);
        } catch (error) {

        }
    }

    return (
        <div>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                        MUI
                    </LinkBreadcrumbs>
                    <LinkBreadcrumbs
                        underline="hover"
                        color="inherit"
                        href="/getting-started/installation/"
                    >
                        Core
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </div>
            <div className="product__wrapper">
                <sidebar className="product__sidebar">
                    <Sidebar />
                </sidebar>
                <article className="product__main">
                    <h2 className="product__main__title">Dien thoai di dong</h2>
                    <div className="product__main__header">
                        <p className="product__main__countTotal">234234 san pham tim thay trong smartphone</p>
                        <div className="product__main__sort">
                            <span className="product__main__sort-title">sap xep theo:</span>
                            <div className="product__main__sort-select">
                                <Box sx={{ minWidth: 120 }} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Phu hop nhat</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Phu hop nhat"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Gia tu thap toi cao</MenuItem>
                                            <MenuItem value={20}>Gia tu cao toi thap</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <Mystore />
                    </div>
                    <div className="product__main__body">
                        <div className="product__list">
                            {products.length ?
                                [...products].map(item => {
                                    return (<div className="product__item">
                                        <Product product={item} />
                                    </div>)
                                }) :
                                "khong co san pham nao"
                            }
                            <div className="product__item">
                                <ProductSkeleton />
                            </div>
                        </div>
                    </div>
                    <div className="product__paginion">
                        <Stack spacing={2}>
                            <Pagination count={10} color="secondary" />
                        </Stack>
                    </div>
                </article>
            </div>
        </div>
    );
}



export default ProductPage;
