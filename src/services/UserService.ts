import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../models/IUser';

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/auth'}),
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
        loginUser: builder.mutation<IUser, string>({
            query: (token) => ({
                url: '/login',
                method: 'POST',
                body: token
            }),
            invalidatesTags: ['User']
        }),
        getUser: builder.query<IUser, IUser>({
            query: (user) => ({
                url: '/me',
                body: user
            }),
            providesTags: ['User']
        })
    })
})