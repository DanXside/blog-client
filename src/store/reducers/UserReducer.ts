import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    data: IUser | null;
    auth: boolean;
}

const initialState: UserState = {
    data: null,
    auth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.data = action.payload;
        },
    }
})

export const {setUser} = authSlice.actions;

export default authSlice.reducer;

