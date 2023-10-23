import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";


export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/posts',
        prepareHeaders: (headers: Headers) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                headers.set('authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<any, {limit: number, page: number}>({
            query: (query) => {
                const {limit, page} = query;
                return {
                    url: `/`,
                    params: {
                        page,
                        limit
                    }
                } 
            },
            providesTags: ['Posts']
        }),
        getPost: builder.query<IPost, string>({
            query: (id) => ({
                url: `/${id}`,
                params: {
                    id
                }
            })
        }),
        createPost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/create-post',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        updatePost: builder.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/update-post/${post._id}`,
                method: 'PATCH',
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        deletePost: builder.mutation<IPost[], number>({
            query: (id) => ({
                url: `/`,
                method: 'DELETE',
                params: {
                    id
                }
            }),
            invalidatesTags: ['Posts']
        })
    })
})
