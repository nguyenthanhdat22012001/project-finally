import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import ImageGallery from 'react-image-gallery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import StoreIcon from '@mui/icons-material/Store';
import ChatIcon from '@mui/icons-material/Chat';
import { Tooltip } from '@mui/material';
import { useParams } from 'react-router-dom';
//helper
import { fCurrency, PriceSale, fPercent } from "helper/FormatNumber";
// api
import productApi from 'api/productApi';

import "./ProductDetailPage.scss";
import TabDetailProduct from "../components/TabDetailProduct";
import Product2 from "../components/Product2";
import InputUpDown from "components/inputs/InputUpDown";


function ProductDetailPage() {
    const { slug } = useParams();

    /*****state*****/
    const [showDescCoupon, setShowDescCoupon] = useState();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [attribute, setAtribute] = React.useState('web');

    /*******load product relative*******/
    useEffect(() => {
        Promise.all([getAllProducts()]);
    }, [])
    /*******load product detail*******/
    useEffect(async () => {
        await getProductBySlug();
    }, [slug])

    /*************get all product**************/
    const getAllProducts = async () => {
        try {
            const res = await productApi.getAllProducts();
            if (res.success) {
                setProducts([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /*************get  product by slug**************/
    const getProductBySlug = async () => {
        try {
            const res = await productApi.getBySlug(slug);
            if (res.success) {
                setProduct({ ...res.data });
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /*************handle toggle coupon**************/
    const handleToggleDescCoupon = () => {
        if (showDescCoupon) {
            setShowDescCoupon(false)
        } else {
            setShowDescCoupon(false)
        }
    }
    /*************handle choose attribute**************/
    const handleChange = (event, attribute) => {
        console.log('attribute', attribute)
        setAtribute(attribute);
    };

    return (
        <div>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkBreadcrumbs underline="hover" color="inherit">
                        <Link to="/client">
                            TADAHA
                        </Link>
                    </LinkBreadcrumbs>
                    <LinkBreadcrumbs
                        underline="hover"
                        color="inherit"
                    >
                        <Link to="/client/product">
                            Sản Phẩm
                        </Link>
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">{Object.keys(product).length > 0 ? product.name : ''}</Typography>
                </Breadcrumbs>
            </div>
            <div className="row product__detail">
                <div className="row product__detail__top">
                    <div className="product__detail__infor-product">
                        <div className="product__detail__image-galery">
                            <ImageGallery
                                showFullscreenButton={false}
                                showPlayButton={false}
                                thumbnailPosition="left"
                                showNav={false}
                                lazyLoad={true}
                                sizes="large"
                                slideDuration={1000}
                                items={
                                    Object.keys(product).length > 0 ?
                                        [...product.listimg].map(item => {
                                            return {
                                                original: item,
                                                thumbnail: item,
                                            }
                                        })
                                        : []
                                }
                                originalHeight={100}
                            />
                        </div>
                        <div className="product__detail__infor">
                            <h2 className="product__detail__infor__title">{Object.keys(product).length > 0 ? product.name : ''}</h2>
                            <div className="product__detail__infor__rating-love">
                                <p className="product__detail__infor__rating">
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    <span className="product__detail__infor__text-rating">
                                        <Link to="#" > 163 lượt đánh giá </Link>
                                    </span>
                                    <span className="product__detail__infor__text-buying">
                                        | 163 Lượt mua
                                    </span>
                                </p>
                                <div className="product__detail__infor__love">
                                    <Tooltip title="thêm sản phẩm yêu thích">
                                        <IconButton aria-label="delete" color="error" >
                                            <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="theo dõi cửa hàng">
                                        <IconButton aria-label="delete" sx={{ color: "orangered" }} >
                                            <StoreIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="chat với cửa hàng">
                                        <IconButton aria-label="delete" color="primary" >
                                            <ChatIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="product__detail__infor__brand">
                                Thương hiệu:
                                <Link to=""> {Object.keys(product).length > 0 ? product.brand.name : ''} </Link>
                            </div>
                            {
                                Object.keys(product).length > 0 && product.discount > 0 ?
                                    <div className="flexBoxColunm product__detail__infor__price">
                                        <span className="product__detail__infor__price-new">
                                            {PriceSale(product.price, product.discount)}
                                        </span>
                                        <div className="product__detail__infor__price-old">
                                            <span> {fCurrency(product.price)}</span>
                                            <span>-{fPercent(product.discount)}</span>
                                        </div>
                                    </div>
                                    :
                                    <div className="flexBoxColunm product__detail__infor__price">
                                        <span className="product__detail__infor__price-new">
                                            {fCurrency(product.price)}
                                        </span>
                                        <div className="product__detail__infor__price-old">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                            }
                            <div className="product__detail__infor__coupon">
                                <h4>Ưu đãi</h4>
                                <Button
                                    onClick={handleToggleDescCoupon}
                                >
                                    <div className="product__detail__infor__tag-coupon" >
                                        <div
                                            className="product__detail__infor__tag-coupon-name product__detail__infor__tag-coupon-has-desc"
                                        >
                                            chi 1k, nhan ngay 100k tro len la het khong con gi
                                        </div>
                                        <div className={showDescCoupon ? "product__detail__infor__tag-coupon-desc action-coupon" : "product__detail__infor__tag-coupon-desc"}>
                                            <div className="backgroundColor-white">
                                                <h5> chi 1k, nhan ngay 100k tro len la het khong chi 1k, nhan ngay 100k tro len la het</h5>
                                                <p>chi 1k, nhan ngay 100k tro len la het khong chi 1k, nhan ngay 100k tro len la het khong chi 1k, nhan ngay 100k tro len la het khongchi 1k, nhan ngay 100k tro len la het khong khongchi 1k, nhan ngay 100k tro len la het khong</p>
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                            <div className="product__detail__infor__attribute">
                                <h4>Thuộc tính</h4>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={attribute}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    {
                                        Object.keys(product).length > 0 ?
                                            [...product.attributes].map(item => {
                                                return <ToggleButton value={item.id} >{item.name}</ToggleButton>
                                            })

                                            : ''
                                    }
                                </ToggleButtonGroup>
                            </div>
                            <div className="product__detail__infor__attribute">
                                <h4>Số lượng</h4>
                                <InputUpDown />
                            </div>
                            <div className="group-btn-cart">
                                <Button variant="contained" color="secondary" size="large" sx={{ marginRight: 1 }}>Mua ngay</Button>
                                <Button variant="contained" color="primary" size="large">Them vao gio hang</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row product__detail__body">
                    <article className="product__detail__content">
                        <TabDetailProduct 
                        description={Object.keys(product).length > 0 ? product.description : ''} 
                        product_id={product.id}
                        />
                        <div className="product__detail__relative">
                            <h4>Sản phẩm cùng cửa hàng</h4>
                            <div className="product__detail__relative-list">
                                {
                                    [...products].map(item => {
                                        return <div className="product__detail__relative-item">
                                            <Product2 key={item.id} product={item} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="product__detail__relative">
                            <h4>Sản phẩm liên quan</h4>
                            <div className="product__detail__relative-list">

                                {
                                    [...products].map(item => {
                                        return <div className="product__detail__relative-item">
                                            <Product2 key={item.id} product={item} />
                                        </div>
                                    })
                                }


                            </div>
                        </div>
                    </article>
                    <div className="product__detail__sidebar">
                        <div className="row">
                            <h4 style={{ marginTop: '5px' }}>Quảng cáo sản phẩm</h4>
                            {
                                [...products].map(item => {
                                    return <div className="row">
                                        <Product2 key={item.id} product={item} />
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductDetailPage;
