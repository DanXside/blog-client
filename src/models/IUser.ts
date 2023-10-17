export interface IUser {
    name: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
    time?: Date;
    token?: string;
}