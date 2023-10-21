import { IUser } from "./IUser";

export interface IComment {
    text: string;
    user: string;
    post: string;
}

export interface ICommentOutPut {
    text: string;
    user: IUser;
    post: string;
}