import {Box, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button, IconButton} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import { IPost } from "../models/IPost";
import { userAPI } from "../services/UserService";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PostProps {
    post: IPost & {
        user: {
            name: string
        }
    };

}

const PostItem: FC<PostProps> = ({post}) => {
    const {data: user} = userAPI.useGetUserQuery(undefined);
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    return (
        <Card sx={{width: '60rem'}} >
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
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{
                            fontWeight: 400,
                            fontSize: '1.4rem',
                            color: '#828282',
                            marginTop: '1rem'
                        }}
                    >
                            {post?.user.name}
                    </Typography>
                    <Box display="flex" sx={{marginTop: '1rem', gap: '1rem', alignItems: 'center'}}>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#828282'
                            }}
                        >
                            {formatter.format(Date.parse(post?.createdAt as string))}
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
                <Link to={`/post/${post._id}`}>
                    <Button variant="text" sx={{fontSize: '1.2rem'}}>
                        Читать
                    </Button>
                </Link>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '1.3rem',
                        color: '#ffffff'
                    }} >
                        {post.viewsCount} <VisibilityIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} /> 
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '1.3rem',
                        color: '#ffffff'
                    }} >
                        10 <CommentIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} /> 
                    </Box>
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
    )
};

export default PostItem;