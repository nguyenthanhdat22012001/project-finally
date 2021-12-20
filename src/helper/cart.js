
import { convertPriceSale } from 'helper/FormatNumber';

export const setCartLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeCartLocalStorage = () => {
    localStorage.removeItem('cart');
}

export const getCartLocalStorage = () => {
    const localStorage_cartString = localStorage.getItem('cart');

    if (localStorage_cartString) {
        const localStorage_cart = JSON.parse(localStorage_cartString);
        return localStorage_cart;
    } else {
        return null;
    }
}

export const handleAddCartInLocalStorage = (data) => {
    const cartLocalStorage = getCartLocalStorage();
    let newProduct = {};
    newProduct = {
        product: {
            ...data.product,
            price: data.product.discount > 0 ?
                convertPriceSale(data.product.price, data.product.discount)
                : data.product.price
        },
        attributes: [
            {
                ...data.attribute,
                quantity: data.quantity
            }
        ],
    };

    if (!cartLocalStorage) {
        let newCart = {
            stores: [
                {
                    store: data.store,
                    products: [newProduct],
                },
            ],
        };
        setCartLocalStorage(newCart);
    } else {
        const findStore = [...cartLocalStorage.stores].find(item => item.store.id === data.store.id);

        if (findStore) {
            // # add product same store
            [...cartLocalStorage.stores].forEach(stor => {
                if (stor.store.id === findStore.store.id) {

                    const findProduct = [...stor.products].find(item => item.product.id === data.product.id);
                    if (findProduct) {
                        // # add same product
                        [...stor.products].forEach(prd => {
                            if (prd.product.id === findProduct.product.id) {

                                const findAttribute = [...prd.attributes].find(item => item.id === data.attribute.id);
                                if (findAttribute) {
                                    // # add same attribute  
                                    [...prd.attributes].forEach(attribute => {
                                        if (attribute.id === findAttribute.id) {
                                            attribute.quantity += data.quantity
                                        }
                                    })
                                } else {
                                    // # add different attribute
                                    prd.attributes.push({
                                        ...data.attribute,
                                        quantity: data.quantity
                                    });
                                }
                            }

                        });
                    } else {
                        // # add different product
                        stor.products.push(newProduct);
                    }
                }
            });
        } else {
            cartLocalStorage.stores.push({
                store: data.store,
                products: [newProduct],
            })
        }
        setCartLocalStorage(cartLocalStorage);
    }
}

export const handleUpdateTotalCartInLocalStorage = () => {
    const cartLocalStorage = getCartLocalStorage();
    if (cartLocalStorage) {
        [...cartLocalStorage.stores].forEach(store => {

            [...store.products].forEach(product => {
                let subQuantity = 0;
                [...product.attributes].forEach(attribute => {
                    subQuantity = subQuantity + attribute.quantity;
                });
                //sub price, quantity product
                product.subQuantity = subQuantity;
                // if have coupon
                if (store.coupon && Object.keys(store.coupon).length > 0) {
                    product.subPrice = (subQuantity * product.product.price) - store.coupon.price;
                } else {
                    product.subPrice = subQuantity * product.product.price;
                }
            });

        });

        [...cartLocalStorage.stores].forEach(store => {
            let totalQuantity = 0;
            let totalPrice = 0;

            [...store.products].forEach(product => {
                totalQuantity = totalQuantity + product.subQuantity;
                totalPrice = totalPrice + product.subPrice;
            });
            //total price, quantity store
            store.totalQuantity = totalQuantity;
            store.totalPrice = totalPrice;
        });

        //total price final
        cartLocalStorage.totalPrice = [...cartLocalStorage.stores].reduce((previous, current) => {
            return previous + current.totalPrice;
        }, 0);
        //if coupon system existing update totalPrice
        if (cartLocalStorage.coupon && Object.keys(cartLocalStorage.coupon).length > 0) {
            cartLocalStorage.totalPrice = cartLocalStorage.totalPrice - cartLocalStorage.coupon.price;
        };
        //if payment existing update totalPrice, fee ship
        if (cartLocalStorage.payment && Object.keys(cartLocalStorage.payment).length > 0) {
            cartLocalStorage.feeShip = [...cartLocalStorage.stores].length * cartLocalStorage.payment.fee_shipping;
            cartLocalStorage.totalPrice = cartLocalStorage.totalPrice + cartLocalStorage.feeShip;
        }else{
            cartLocalStorage.feeShip = 0;
            cartLocalStorage.totalPrice = cartLocalStorage.totalPrice - cartLocalStorage.feeShip;
        }
        //total price quantity
        cartLocalStorage.totalQuantity = [...cartLocalStorage.stores].reduce((previous, current) => {
            return previous + current.totalQuantity;
        }, 0);
    };
    setCartLocalStorage(cartLocalStorage);
}

export const handleDeleteProductInLocalStorage = (store_id, product_id, attribute_id) => {
    const cartLocalStorage = getCartLocalStorage();

    if (cartLocalStorage) {

        [...cartLocalStorage.stores].forEach(stor => {
            if (stor.store.id === store_id) {

                [...stor.products].forEach(prd => {
                    if (prd.product.id === product_id) {

                        if ([...prd.attributes].length > 1) {
                            prd.attributes = [...prd.attributes].filter(attribute => attribute.id !== attribute_id);
                            return;
                        } else {
                            if ([...stor.products].length > 1) {
                                stor.products = [...stor.products].filter(prd => prd.product.id !== product_id);
                                return;
                            } else {
                                cartLocalStorage.stores = [...cartLocalStorage.stores].filter(stor => stor.store.id !== store_id);
                                return;
                            }

                        }
                    }
                });
            }

        });
    }
    setCartLocalStorage(cartLocalStorage);
}

export const handleUpdateQuantityProductInLocalStorage = (store_id, product_id, attribute_id, quantity) => {
    const cartLocalStorage = getCartLocalStorage();

    if (cartLocalStorage) {

        [...cartLocalStorage.stores].forEach(stor => {
            if (stor.store.id === store_id) {
                [...stor.products].forEach(prd => {
                    if (prd.product.id === product_id) {

                        [...prd.attributes].forEach(attribute => {
                            if (attribute.id === attribute_id) {
                                //if quantity > 0 , update quantity
                                if (quantity > 0) {
                                    attribute.quantity = quantity
                                    return;
                                }
                            }
                        });
                        // if quantity === 0, if attributes > 1 delete attribute by attribute_id else. if quantity > 0 , update quantity
                        if (quantity === 0) {
                            if ([...prd.attributes].length > 1) {
                                prd.attributes = [...prd.attributes].filter(attribute => attribute.id !== attribute_id);
                                return;
                            } else {
                                if ([...stor.products].length > 1) {
                                    stor.products = [...stor.products].filter(prd => prd.product.id !== product_id);
                                    return;
                                } else {
                                    cartLocalStorage.stores = [...cartLocalStorage.stores].filter(stor => stor.store.id !== store_id);
                                    return;
                                }
                            }
                        }
                    }
                })
            }
        })
        setCartLocalStorage(cartLocalStorage);
    }

}

export const handleUseCouponStoreInLocalStorage = (store_id, coupon) => {
    const cartLocalStorage = getCartLocalStorage();
    let isUseCoupon = false;

    if (cartLocalStorage) {
        [...cartLocalStorage.stores].forEach(stor => {
            if (stor.store.id == store_id) {
                if (coupon) {
                    if (stor.totalPrice >= coupon.condition) {
                        stor.coupon = coupon;
                        isUseCoupon = true;
                    }
                } else {
                    stor.coupon = {}
                    isUseCoupon = true;
                }
            };
        });

        setCartLocalStorage(cartLocalStorage);
        return isUseCoupon;
    }

}

export const handleUseCouponSystemInLocalStorage = (coupon) => {
    const cartLocalStorage = getCartLocalStorage();
    let isUseCoupon = false;

    if (cartLocalStorage) {

        if (coupon) {
            if (cartLocalStorage.totalPrice >= coupon.condition) {
                cartLocalStorage.coupon = coupon;
                isUseCoupon = true;
            }
        } else {
            cartLocalStorage.coupon = {}
            isUseCoupon = true;
        }


        setCartLocalStorage(cartLocalStorage);
        return isUseCoupon;
    }

}


export const handlePaymentInLocalStorage = (payment) => {
    const cartLocalStorage = getCartLocalStorage();

    if (cartLocalStorage) {
        if (payment) {
            cartLocalStorage.payment = payment;
        } else {
            cartLocalStorage.payment = {};
        }
        setCartLocalStorage(cartLocalStorage);
    }

}