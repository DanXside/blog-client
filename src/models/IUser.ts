export interface IUser {
    name: string;
    email: string;
    password: string;
    roles?: string;
    avatar: string;
    time?: Date;
    token?: string;
}