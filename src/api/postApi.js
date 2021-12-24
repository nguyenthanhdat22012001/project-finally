import axisosClient from "./axisosClient";

const postApi = {
    getPostAll: ()=>{
        const url = `/posts`;
        return axisosClient.get(url);
    },
    getPostUser: (id)=>{
        const url = `/posts/user/${id}`;
        return axisosClient.get(url);
    },
    getPostBySlug: (slug)=>{
        const url = `/posts/${slug}`;
        return axisosClient.get(url);
    },
    updatePost: (id,data)=>{
        const url = `/posts/${id}`;
        return axisosClient.put(url,{...data});
    },
    addPost: (data)=>{
        const url = `/posts`;
        return axisosClient.post(url,{...data});
    },
    getComments: (id)=>{
        const url = `/posts_comment/${id}`;
        return axisosClient.get(url);
    },
    addComments: (data)=>{
        const url = `/posts_comment`;
        return axisosClient.post(url,{...data});
    },
    getThumsUbByPost: (post_id)=>{
        const url = `/posts/thumb-up/${post_id}`;
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
    deletePost: (id)=>{
        const url = `/posts/${id}`;
        return axisosClient.delete(url);
    },
}



export default postApi;