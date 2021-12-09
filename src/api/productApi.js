import axisosClient from "./axisosClient";

const productApi = {
    getAllProducts: (params)=>{
        const url = `/products`;
        return axisosClient.get(url,{params});
    },
    getProductsBySlugCategory: (slug)=>{
        const url = `/product/category/${slug}`;
        return axisosClient.get(url);
    },
    getProductsBySlugStore: (slug)=>{
        const url = `/product/store/${slug}`;
        return axisosClient.get(url);
    },
    getProductBy: (param)=>{
        const url = `/oderby/product`;
        return axisosClient.get(url,{param});
    },
    getById: (id)=>{
        const url = `/products/${id}`;
        return axisosClient.get(url);
    },
    getBySlug: (slug)=>{
        const url = `/product/detail/${slug}`;
        return axisosClient.get(url);
    },
    getProductBySearch: (params)=>{
        const url = `/search`;
        return axisosClient.get(url,{params});
    },
    addProduct: (data)=>{
        const url = `/products`;
        return axisosClient.post(url,{...data});
    },
    updateProduct: (id,data)=>{
        const url = `/products/${id}`;
        return axisosClient.put(url,{...data});
    },
    deleteProduct: (id)=>{
        const url = `/products/${id}`;
        return axisosClient.delete(url);
    },
    getCommentRating: (id)=>{
        const url = `/product/comments/${id}`;
        return axisosClient.get(url);
    },
    addCommentRating: (data)=>{
        const url = `/comments`;
        return axisosClient.post(url,{...data});
    },
}



export default productApi;