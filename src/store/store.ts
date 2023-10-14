import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];