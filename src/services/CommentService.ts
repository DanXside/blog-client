import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComment, ICommentOutPut } from "../models/IComment";

export const commentAPI = createApi({
    reducerPath: 'commentAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/comment',
        prepareHeaders: (headers: Headers) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                headers.set('authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['Comment'],
    endpoints: (builder) => ({
        createComment: builder.mutation<IComment, IComment>({
            query: (comment) => ({
                url: '/',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comment']
        }),
        getComments: builder.query<ICommentOutPut[], string>({
            query: (id) => ({
                url: '/comms',
                params: {
                    id
                }
            }),
            providesTags: ['Comment']
        }),
        getCommCount: builder.query<any, string>({
            query: (id) => ({
                url: '/comm-count',
                params: {
                    id
                },
                providesTags: ['Comment']
            })
        })
    })
})