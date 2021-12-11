import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// api
import productApi from 'api/productApi';
import categoryApi from 'api/categoryApi';

import './HomePage.scss';
import Product from '../../products/components/Product';
import ListCategory from '../components/ListCategoey';
import TopListStores from '../components/TopListStores';
// img banner
import banner1 from "assets/images/banner-1.jpg";


const images = [
    {
        original: banner1,
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function HomePage() {
    const [products, setProducts] = useState([]);
    const [productsSale, setProductsSale] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Promise.all([getAllProducts(), getProductSale(), getAllCategory()]);
    }, [])
    /*************get all product**************/
    const getAllProducts = async () => {
        try {
            const res = await productApi.getAllProducts();
            console.log('res', res);
            if (res.success) {
                setProducts([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /*************get product sale**************/
    const getProductSale = async () => {
        try {
            const res = await productApi.getProductTopSale();
            console.log('res', res);
            if (res.success) {
                setProductsSale([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
    /*************get all category**************/
    const getAllCategory = async () => {
        try {
            const res = await categoryApi.getCategoryAll();
            console.log('res', res);
            if (res.success) {
                setCategories([...res.data]);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div className="home">
            <div className="row home__top">
                <div className="row home__category home__top-item">
                    <ListCategory categories={categories} />
                </div>

                <div className="row home__banner home__top-item">
                    <ImageGallery
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={true}
                        sizes="large"
                        slideDuration={1000}
                        swipingTransitionDuration={1000}
                        // autoPlay={true}
                        items={images}
                        originalHeight={100}
                    />
                </div>

                <div className="row home__sub-banner home__top-item">
                    <Link to="#">
                        <img src="https://img.alicdn.com/tfs/TB1yhWyueL2gK0jSZPhXXahvXXa-776-194.png" alt="" />
                    </Link>
                </div>

                <div className="row home__sub-banner home__top-item">
                    <Link to="#">
                        <img src="https://img.alicdn.com/tfs/TB11L1Eubj1gK0jSZFuXXcrHpXa-776-194.png" alt="" />
                    </Link>
                </div>

                <div className="row home__sub-banner home__top-item">
                    <Link to="#">
                        <img src="https://img.alicdn.com/tfs/TB1pQmAueH2gK0jSZFEXXcqMpXa-776-194.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className="row home__product home__product--hot">
                <h2 className="home__title">Sản Phẩm HOT</h2>
                <div className="home__product__carousel">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    //  sliderClass="plex-gap-25"
                    >
                        {
                            [...products].map(item => {
                                return <Product key={item.id} product={item} />
                            })
                        }
                    </Carousel>

                </div>
            </div>
            <div className="row home__Stores">
                <h2 className="home__title">Top Cửa Hàng</h2>
                <div className="row home__Stores__list">
                    <TopListStores />
                </div>
            </div>
            <div className="row home__product home__product__sale">
                <div className="home__product__header">
                    <h2 className="home__title">Sản Phẩm Sale</h2>
                    <Button variant="outlined" color="secondary" size="small">
                        Xem tat ca
                    </Button>
                </div>
                <div className="home__product__sale__list">
                    {
                        [...productsSale].length > 0 ?
                            [...productsSale].map(item => {
                                return <div className="home__product__sale__item">
                                    <Product key={item.id} product={item} />
                                </div>
                            })
                            : ""
                    }
                </div>
            </div>

        </div>
    );
}

export default HomePage;