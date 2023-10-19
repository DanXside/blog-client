export interface IPost {
    _id: number;
    title: string;
    text: string;
    postImage: string;
    sections: Array<string>;
    viewsCount: number;
    user: string;
    time: Date;
}