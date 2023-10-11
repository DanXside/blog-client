import { SetStateAction, createContext, Dispatch } from "react";

interface IAuthContext {
    isAuth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
    isAuth: false,
    setAuth: () => {}
});