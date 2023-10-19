import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button, IconButton, Pagination, Skeleton } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { postsAPI } from "../services/PostsService";
import { userAPI } from "../services/UserService";
import { SetStateAction, useState } from "react";

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
    const {data, isLoading} = postsAPI.useGetPostsQuery({limit, page});
    const totalPages = Math.round((data?.length as number) / limit);

    const {data: user} = userAPI.useGetUserQuery(undefined);

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
                data?.map((post, i) => (
                        <Card key={i} sx={{width: '60rem'}} >
                            <CardActionArea>
                                {
                                    post.postImage
                                    ?
                                    <CardMedia 
                                        component="img"
                                        height="245"
                                        image={`http://localhost:3001${post.postImage}`}
                                        alt="coding"
                                    />
                                    :
                                    <CardMedia 
                                        component="img"
                                        height="245"
                                        image="/src/assets/img/posts/post-1.jpeg"
                                        alt="coding"
                                    />
                                }
                                <CardContent sx={{backgroundColor: '#202020', padding: '2.5rem 2.5rem 1rem 2.5rem'}}>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '1.8rem',
                                            color: '#ffffff',
                                            marginBottom: '1.5rem'
                                        }}
                                    >
                                        {post.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '1.4rem',
                                            color: '#D2D2D2',
                                            height: '6rem',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {post.text}
                                    </Typography>
                                    <Box display="flex" sx={{marginTop: '2rem', gap: '1rem', alignItems: 'center'}}>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '1.4rem',
                                                color: '#828282'
                                            }}
                                        >
                                            21.06.2020
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="p"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '1.4rem',
                                                color: '#828282'
                                            }}
                                        >
                                            <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> {post.sections.map(section => <span key={section} style={{marginRight: '0.8rem'}}>#{section}</span>)}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{backgroundColor: '#202020', padding: '0 2.5rem 1rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Button variant="text" sx={{fontSize: '1.2rem'}}>
                                    Читать
                                </Button>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                    <IconButton>
                                        <EditIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                                    </IconButton>
                                    {
                                        user?.roles === 'ADMIN'
                                        ?
                                        <IconButton>
                                            <HighlightOffIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                                        </IconButton>
                                        :
                                        <></>
                                    }
                                </Box>
                            </CardActions>
                        </Card>
                ))
            }

            <Pagination count={totalPages} page={page} onChange={handleChange} size="large" shape="rounded" color="primary" className="pagination" />
        </Box>
    )
}

export default PostList;