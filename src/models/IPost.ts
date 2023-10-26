export interface IPost {
    _id?: string;
    title: string;
    text: string;
    postImage: string;
    sections: Array<string>;
    viewsCount?: number;
    user?: string;
    createdAt?: any;
}