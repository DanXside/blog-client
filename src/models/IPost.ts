export interface IPost {
    title: string;
    text: string;
    postImage: string;
    sections: Array<string>;
    viewsCount: number;
    user: string;
    time: Date;
}