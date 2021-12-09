import axisosClient from "./axisosClient";

const postApi = {
    getPostAll: ()=>{
        const url = `/posts`;
        return axisosClient.get(url);
    },
    getPostBySlug: (slug)=>{
        const url = `/posts/${slug}`;
        return axisosClient.get(url);
    },
    addPost: (data)=>{
        const url = `/posts`;
        return axisosClient.post(url,{...data});
    },
    getComments: (id)=>{
        const url = `/posts_comment/${id}`;
        return axisosClient.get(url);
    },
    likePost: (data)=>{
        const url = `/like-post`;
        return axisosClient.post(url,{...data});
    },
    removeLikePost: (data)=>{
        const url = `/remove-like-post`;
        return axisosClient.post(url,{...data});
    },
    checkUserLikePost: (params)=>{
        const url = `/check-user-like-post`;
        return axisosClient.get(url,{params});
    },
}



export default postApi;