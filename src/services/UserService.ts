import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../models/IUser';

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://pb-blog.ru:3001/auth',
        prepareHeaders: (headers: Headers) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                headers.set('authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        createUser: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/registration',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        loginUser: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        getUser: builder.query<IUser, undefined>({
            query: () => ({
                url: '/me',
            }),
            providesTags: ['User']
        })
    })
})

