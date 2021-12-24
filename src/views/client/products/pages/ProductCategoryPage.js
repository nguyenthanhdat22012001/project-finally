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
import { Link, useParams } from 'react-router-dom';
//api
import productApi from "api/productApi";
//helper
import { convertPriceSale } from "helper/FormatNumber";
import { scrollToTop } from 'helper/notify';

import "./ProductPage.scss";
import Sidebar from "../components/Sidebar";
import Product from "../components/Product";



function ProductCategoryPage() {
    const { slug } = useParams();
   
    /*****state******/
    const [sort, setSort] = useState('NONE');
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [pages, setPages] = useState({
        limit: 6,
        currentPage: 1,
    });
    const [filterProduct, setFilterProduct] = useState({
        isFilter: false,
        attributeFilter: {
            brand_id: [],
        },
        productFiltered: [],
    });
    /*************load page**************/
    useEffect(async () => {
        await getAllProductsBySlug(slug);
        scrollToTop();
    }, [slug])

    /*************get all product**************/
    const getAllProductsBySlug = async (slug) => {
        try {
            const res = await productApi.getProductsBySlugCategory(slug);
            if (res.success) {
                setProducts([...res.data.products]);
                setCategory({...res.data.category});
            }
         
        } catch (error) {
            console.log('error', error);
        }
    }

    /******display product by page******/
    let displayProduct = '';
    if (filterProduct.isFilter) {
        displayProduct = [...filterProduct.productFiltered].slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
            return (
                <div className="product__item">
                    <Product key={item.id} product={item} />
                </div>
            )
        })
    } else {
        displayProduct = products.slice((pages.currentPage * pages.limit) - pages.limit, pages.currentPage * pages.limit).map(item => {
            return (
                <div className="product__item">
                    <Product key={item.id} product={item} />
                </div>
            )
        })
    }

    /*************get all product**************/
    const handleChangePage = (event, value) => {
        setPages({
            ...pages,
            currentPage: value,
        });
        scrollToTop();
    };
    /*************handle filter product**************/
    const handleChangeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const attributeFilter = { ...filterProduct.attributeFilter };
        let newAttributeFilter = {
            brand_id: [],
        };
        let productFilter = [];

        if (target.type === 'checkbox') {
            if (target.checked) {
                if (name == 'brand_id') {
                    newAttributeFilter = {
                        brand_id: [...attributeFilter.brand_id, value],
                    };
                }

            } else {
                if (name == 'brand_id') {
                    newAttributeFilter.brand_id = [...attributeFilter.brand_id].filter(item => item != value);
                }
            }
        }

        if (newAttributeFilter.brand_id.length > 0) {
            for (const keyFilter in newAttributeFilter) {
                newAttributeFilter[keyFilter].map(item => {
                    const newProducts = [...products].filter(product => product[keyFilter] == item);
                    productFilter = [...productFilter, ...newProducts];
                })
            }
        }


        if (newAttributeFilter.brand_id.length === 0) {
            setFilterProduct({
                ...filterProduct,
                isFilter: false,
                attributeFilter: {
                    brand_id: newAttributeFilter.brand_id
                },
                productFiltered: productFilter,
            });
        } else {
            setFilterProduct({
                ...filterProduct,
                isFilter: true,
                attributeFilter: {
                    brand_id: newAttributeFilter.brand_id
                },
                productFiltered: productFilter,
            });
        }
        setPages({
            ...pages,
            currentPage: 1,
        })

    };
    /*************handle sort product**************/

    const handleSortProduct = (e) => {
        const key = e.target.value;
        setSort(key);
        setPages({
            ...pages,
            currentPage: 1,
        })
        let newProduct = [];
        switch (key) {
            case 'A-Z':
                if (filterProduct.isFilter) {
                    newProduct = filterProduct.productFiltered.sort((a, b) => convertPriceSale(a.price, a.discount) - convertPriceSale(b.price, b.discount));
                    setFilterProduct({
                        ...filterProduct,
                        productFiltered: newProduct,
                    });
                } else {
                    newProduct = products.sort((a, b) => convertPriceSale(a.price, a.discount) - convertPriceSale(b.price, b.discount));
                    setProducts(newProduct);
                }
                break;
            case 'Z-A':
                if (filterProduct.isFilter) {
                    newProduct = filterProduct.productFiltered.sort((a, b) => convertPriceSale(b.price, b.discount) - convertPriceSale(a.price, a.discount));
                    setFilterProduct({
                        ...filterProduct,
                        productFiltered: newProduct,
                    });
                } else {
                    newProduct = products.sort((a, b) => convertPriceSale(b.price, b.discount) - convertPriceSale(a.price, a.discount));
                    setProducts(newProduct);
                }
                break;

            default:
                console.log('default');
                break;
        }
    }

    return (
        <div>
            {console.log('filterProduct', filterProduct)}
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkBreadcrumbs underline="hover" color="inherit">
                        <Link to="/client">
                            TADAHA
                        </Link>
                    </LinkBreadcrumbs>
                    <LinkBreadcrumbs underline="hover" color="inherit">
                        <Link to="/client/product">
                            Sản phẩm
                        </Link>
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">{Object.keys(category).length > 0 ? category.name : ""}</Typography>
                </Breadcrumbs>
            </div>
            <div className="product__wrapper">
                <div className="product__sidebar">
                    <Sidebar handleChangeInput={handleChangeInput} />
                </div>
                <article className="product__main">
                    <h2 className="product__main__title">{Object.keys(category).length > 0 ? category.name : ""}</h2>
                    <div className="product__main__header">
                        <p className="product__main__countTotal">{filterProduct.isFilter ? [...filterProduct.productFiltered].length : [...products].length} sản phẩm tìm thấy</p>
                        <div className="product__main__sort">
                            <span className="product__main__sort-title">Sắp xếp theo:</span>
                            <div className="product__main__sort-select">
                                <Box sx={{ minWidth: 120 }} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Phù hợp nhất</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sort}
                                            label="Phù hợp nhất"
                                            onChange={handleSortProduct}
                                        >
                                            <MenuItem value={'NONE'}>Phù hợp nhất</MenuItem>
                                            <MenuItem value={'A-Z'}>Giá từ thấp tới cao</MenuItem>
                                            <MenuItem value={'Z-A'}>Giá từ cao tới thấp</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="product__main__body">
                        <div className="product__list">
                            {products.length > 0 ?
                                displayProduct
                                :
                                <Typography
                                variant="h6"
                                component="div"
                                sx={{ textAlign: 'center', margin: '10px 0' }}
                            >
                                Không có sản phẩm nào
                            </Typography>
                            }
                        </div>
                    </div>
                    <div className="product__paginion">
                        <Stack spacing={2}>
                            <Pagination
                                count={filterProduct.isFilter ? Math.ceil([...filterProduct.productFiltered].length / pages.limit) : Math.ceil([...products].length / pages.limit)}
                                color="secondary"
                                page={pages.currentPage}
                                onChange={handleChangePage}
                            />
                        </Stack>
                    </div>
                </article>
            </div>
        </div>
    );
}



export default ProductCategoryPage;
