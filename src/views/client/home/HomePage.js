import React from "react";
import ImageGallery from 'react-image-gallery';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './Home.scss';
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import ListCategory from './ListCategoey';
import Product from '../products/Product';
import TopListStores from './TopListStores';

class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
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
    responsive = {
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
    render() {
        return <div className="client">
            <ScrollToTop />
            <Chat />
            <Header />
            <main className="client__inner">
                <div className="home">
                    <div className="row home__top">
                        <div className="row home__category home__top-item">
                            <ListCategory />
                        </div>

                        <div className="row home__banner home__top-item">
                            <ImageGallery
                                showThumbnails={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showBullets={true}
                                sizes="large"
                                slideDuration={2000}
                                swipingTransitionDuration={200}
                                // autoPlay={true}
                                items={this.images}
                                originalHeight={100}
                            />
                        </div>

                        <div className="row home__sub-banner home__top-item">
                            <Link>
                                <img src="https://img.alicdn.com/tfs/TB1yhWyueL2gK0jSZPhXXahvXXa-776-194.png" alt="" />
                            </Link>
                        </div>

                        <div className="row home__sub-banner home__top-item">
                            <Link>
                                <img src="https://img.alicdn.com/tfs/TB11L1Eubj1gK0jSZFuXXcrHpXa-776-194.png" alt="" />
                            </Link>
                        </div>

                        <div className="row home__sub-banner home__top-item">
                            <Link>
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
                                responsive={this.responsive}
                                keyBoardControl={true}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            //  sliderClass="plex-gap-25"
                            >
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </Carousel>

                        </div>
                    </div>
                    <div className="row home__Stores">
                        <h2 className="home__title">Top cua hang</h2>
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
                            <div className="home__product__sale__item">
                                <Product />
                            </div>
                            <div className="home__product__sale__item">
                                <Product />
                            </div>
                            <div className="home__product__sale__item">
                                <Product />
                            </div>
                            <div className="home__product__sale__item">
                                <Product />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    }
}

export default HomePage;