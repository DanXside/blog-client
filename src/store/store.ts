import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";
import authReducer from './reducers/UserReducer';
import { useDispatch } from "react-redux";
import { postsAPI } from "../services/PostsService";
import { commentAPI } from "../services/CommentService";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    [commentAPI.reducerPath]: commentAPI.reducer,
    authReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(userAPI.middleware, postsAPI.middleware, commentAPI.middleware)
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch