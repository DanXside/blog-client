import { Box, Pagination, Skeleton } from "@mui/material";
import { postsAPI } from "../services/PostsService";
import { useState } from "react";
import { IPost } from "../models/IPost";
import PostItem from "./PostItem";

const SkeletonItem = () => {
    return (
        <Box sx={{width: '60rem'}}>
            <Skeleton variant="rectangular" width={600} height={245} animation="wave" />
            <Skeleton variant="rounded" width={400} height={20} sx={{marginTop: '1.4rem'}} animation="wave" />
            <Skeleton variant="rounded" width={560} height={60} sx={{marginTop: '1.4rem'}} animation="wave" />
            <Skeleton variant="rounded" width={200} height={15} sx={{marginTop: '1.4rem'}} animation="wave" />
            <Skeleton variant="rectangular" width={100} height={20} sx={{marginTop: '1.4rem'}} animation="wave" />
        </Box>
    )
}

const PostList = () => {
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const query = {
        limit,
        page
    }
    const {data: postList, isLoading} = postsAPI.useGetPostsQuery(query);
    const totalPages = postList?.pagination.total;

    

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    return (
        <Box className="postsWrap" >
            {
                isLoading
                ?
                <>
                    <SkeletonItem />
                    <SkeletonItem />
                    <SkeletonItem />
                </>
                :
                <></>
            }
            {   
                postList?.posts?.map((post: IPost, i: number) => <PostItem key={i} post={post} />)
            }

            <Pagination count={totalPages} page={page} onChange={handleChange} size="large" shape="rounded" color="primary" className="pagination" />
        </Box>
    )
}

export default PostList;