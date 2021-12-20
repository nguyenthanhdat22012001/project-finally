import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import ImageGallery from 'react-image-gallery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import StoreIcon from '@mui/icons-material/Store';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ChatIcon from '@mui/icons-material/Chat';
import { Tooltip } from '@mui/material';
import { useParams } from 'react-router-dom';
// notify
import { useSnackbar } from 'notistack';
//helper
import { fCurrency, PriceSale, fPercent, fCurrencyVN } from "helper/FormatNumber";
import { handleNotiDialog } from 'helper/notify';
// api
import productApi from 'api/productApi';
import couponApi from 'api/couponApi';
import storeApi from 'api/storeApi';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { handleAddCartRedux } from "redux/actions/cartAction";

import "./ProductDetailPage.scss";
import TabDetailProduct from "../components/TabDetailProduct";
import Product2 from "../components/Product2";
import Coupon from "../components/Coupon";
import InputQuantity from "../components/InputQuantity";
import ProccessDialog from "components/dialog/ProccessDialog";

const baseUrl = '/client/product/';

function ProductDetailPage() {
    const { slug } = useParams();
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    /*****state*****/
    const [isProccess, setIsProccess] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const [products, setProducts] = useState([]);
    const [productRelativeCategory, setProductRelativeCategory] = useState([]);
    const [productRelativeStore, setProductRelativeStore] = useState([]);
    const [product, setProduct] = useState({});
    const [attribute, setAtribute] = useState({
        id: null,
        maxQuantity: null,
        quantity: 1,
    });

    /*******load product relative*******/
    useEffect(() => {
        Promise.all([getAllProducts()]);
    }, [])
    /*******load product detail*******/
    useEffect(async () => {
        await getProductBySlug();
    }, [slug])

    /*************get  product by slug**************/
    const getProductBySlug = async () => {
        try {
            const res = await productApi.getBySlug(slug);
            if (res.success) {
                setProduct({ ...res.data });
                const initAttribute = [...res.data.attributes].find(item => item.quantity > 0);
                setAtribute({
                    ...attribute,
                    id: initAttribute.id,
                    maxQuantity: initAttribute.quantity,
                })
                Promise.all([
                    hanldeCheckUserFollowStore(res.data.store_id),
                    hanldeCheckUserFavoriteProduct(res.data.id),
                    getProductCategoryRelative(res.data.cate.id),
                    getProductStoreRelative(res.data.store.id),
                    getCouponOfStore(res.data.store_id),
                ]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

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
    /*************get product have category relative**************/
    const getProductCategoryRelative = async (id) => {
        try {
            const res = await productApi.getProductByBrandOrCateOrStore('cate', id);
            if (res.success) {
                setProductRelativeCategory([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /*************get product have category relative**************/
    const getProductStoreRelative = async (id) => {
        try {
            const res = await productApi.getProductByBrandOrCateOrStore('store', id);
            if (res.success) {
                setProductRelativeStore([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    /*************get coupons store**************/
    const getCouponOfStore = async (store_id) => {
        try {
            const res = await couponApi.getCouponStore(store_id);
            if (res.success) {
                setCoupons([...res.data]);
            }
            console.log('res', res);
        } catch (error) {
            console.log('error', error);
        }
    }
    /***************handle check user follow store****************/
    const hanldeCheckUserFollowStore = async (store_id) => {
        if (!user) {
            return;
        }

        try {
            const params = {
                user_id: user.id,
                store_id: store_id,
            };
            const res = await storeApi.checkUserFollowStore(params);
            if (res.success) {
                setIsFollow(true);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    /***************handle check user follow store****************/
    const hanldeCheckUserFavoriteProduct = async (product_id) => {
        if (!user) {
            return;
        }

        try {
            const params = {
                user_id: user.id,
                product_id: product_id,
            };
            const res = await productApi.checkUserFavoriteProduct(params);
            if (res.success) {
                setIsFavorite(true);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    /************** handle toggle collection product  ***************/
    const handleAddProductUserCollection = async (boolean, product_id) => {

        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }

        const newData = {
            product_id: product_id,
            user_id: user.id
        }

        try {
            let res = null;
            if (boolean) {
                res = await productApi.collectionProduct(newData);
            } else {
                res = await productApi.deleteProductUserCollection(newData);
            }

            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                setIsFavorite(boolean);
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }


        } catch (error) {
            console.log('error: ' + error);
        }
    };
    /************** handle collection store ***************/
    const handleCollectionStore = async (store_id) => {
        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }

        try {
            const newData = {
                store_id: store_id,
                user_id: user.id,
            }

            const res = await storeApi.collectionStore(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                setIsFollow(true);
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };

    /************** handle add coupon ***************/
    const handleAddCouponUserCollection = async (coupon_id) => {
        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }
        const newData = {
            coupon_id: coupon_id,
            user_id: user.id
        }
        try {
            const res = await couponApi.collectionCoupon(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };
    /*************handle choose attribute**************/
    const handleChangeAttribute = (event, id) => {
        if (id) {
            const newAttribute = [...product.attributes].find(item => item.id == id);

            setAtribute({
                ...attribute,
                id: newAttribute.id,
                maxQuantity: newAttribute.quantity,
            })
        }
    };
    /*************handle up down quantity attribute**************/
    function handldeSetQuantityAttribute(quantity) {
        setAtribute({
            ...attribute,
            quantity: quantity
        })
    }

    /*************handle add cart**************/
    const handleAddCart = () => {

        try {
            setIsProccess(true);
            const newData = {
                product_id: product.id,
                attribute_id: attribute.id,
                quantity: attribute.quantity,
            };

            dispatch(handleAddCartRedux(enqueueSnackbar, newData));

            setIsProccess(false);

        } catch (error) {
            console.log('error: ' + error);
        }
    }

    return (
        <div>
            {isProccess && <ProccessDialog />} {/* proccess page */}
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
                                    <Rating name="half-rating-read" value={Object.keys(product).length > 0 ? product.totalRating : 0} precision={1} readOnly />
                                    <span className="product__detail__infor__text-rating">
                                        <Link to="#" >  {Object.keys(product).length > 0 ? product.totalComment : ""} lượt đánh giá </Link>
                                    </span>
                                    <span className="product__detail__infor__text-buying">
                                        | {Object.keys(product).length > 0 ? product.order_count : ""} Lượt mua
                                    </span>
                                </p>
                                <div className="product__detail__infor__love">

                                    {
                                        isFavorite ?
                                            <Tooltip title="Đã thêm vào danh sách yêu thích">
                                                <IconButton
                                                    aria-label="delete"
                                                    color="error"
                                                    onClick={() => handleAddProductUserCollection(false, product.id)}
                                                >
                                                    <FavoriteIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </Tooltip>
                                            :
                                            <Tooltip title="Chưa thêm vào danh sách yêu thích">
                                                <IconButton
                                                    aria-label="delete"
                                                    sx={{ color: "gray" }}
                                                    onClick={() => handleAddProductUserCollection(true, product.id)}
                                                >
                                                    <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </Tooltip>
                                    }
                                    {
                                        isFollow ?
                                            <Link to={`${baseUrl}store/${product.store.slug}`}>
                                                <Tooltip title="Đã theo dõi cửa hàng">
                                                    <IconButton aria-label="delete" sx={{ color: "orangered" }} >
                                                        <StoreIcon sx={{ fontSize: 30 }} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                            :
                                            <Tooltip title="theo dõi cửa hàng">
                                                <IconButton
                                                    aria-label="delete"
                                                    sx={{ color: "gray" }}
                                                    onClick={() => handleCollectionStore(product.store_id)}
                                                >
                                                    <AddBusinessIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </Tooltip>
                                    }
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
                                <div className="product__detail__infor__list-coupon">
                                    {
                                        [...coupons].length > 0 ?
                                            [...coupons].map(item => {
                                                return (
                                                    <Coupon
                                                        key={item.id}
                                                        coupon={item}
                                                        handleAddCouponUserCollection={handleAddCouponUserCollection}
                                                    />
                                                )
                                            })
                                            : ''
                                    }
                                </div>
                            </div>
                            <div className="product__detail__infor__attribute">
                                <h4>Thuộc tính</h4>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={attribute.id}
                                    exclusive
                                    onChange={handleChangeAttribute}
                                >
                                    {
                                        Object.keys(product).length > 0 ?
                                            [...product.attributes].map(item => {
                                                return <ToggleButton
                                                    key={item.id}
                                                    value={item.id}
                                                    disabled={item.quantity > 0 ? false : true}
                                                >{item.name}</ToggleButton>
                                            })
                                            : ''
                                    }
                                </ToggleButtonGroup>
                            </div>
                            <div className="product__detail__infor__attribute">
                                <h4>Số lượng</h4>
                                <InputQuantity
                                    handldeSetQuantityAttribute={handldeSetQuantityAttribute}
                                    quantity={attribute.quantity}
                                    maxQuantity={attribute.maxQuantity}
                                />
                            </div>
                            <div className="group-btn-cart">
                                <Button variant="contained" color="secondary" size="large" sx={{ marginRight: 1 }}>Mua ngay</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={handleAddCart}
                                >Thêm vào giỏ hàng</Button>
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
                                    [...productRelativeStore].length > 0 ?
                                        [...productRelativeStore].map(item => {
                                            return <div key={item.id} className="product__detail__relative-item">
                                                <Product2 key={item.id} product={item} />
                                            </div>
                                        })
                                        : ""
                                }
                            </div>
                        </div>
                        <div className="product__detail__relative">
                            <h4>Sản phẩm liên quan</h4>
                            <div className="product__detail__relative-list">

                                {
                                    [...productRelativeCategory].length > 0 ?
                                        [...productRelativeCategory].map(item => {
                                            return <div key={item.id} className="product__detail__relative-item">
                                                <Product2 key={item.id} product={item} />
                                            </div>
                                        })
                                        : ""
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
