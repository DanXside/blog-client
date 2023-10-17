import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    data: IUser | null;
}

const initialState: UserState = {
    data: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})

export default authSlice.reducer;

