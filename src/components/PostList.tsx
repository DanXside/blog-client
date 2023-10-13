import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button, IconButton, Pagination, Skeleton } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React, { useState } from "react";

const PostList = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    return (
        <Box className="postsWrap" >
            { 
                isLoading
                ?
                (
                    <Box sx={{maxWidth: '60rem'}}>
                        <Skeleton variant="rectangular" width={600} height={245} animation="wave" />
                        <Skeleton variant="rounded" width={400} height={20} sx={{marginTop: '1.4rem'}} animation="wave" />
                        <Skeleton variant="rounded" width={560} height={60} sx={{marginTop: '1.4rem'}} animation="wave" />
                        <Skeleton variant="rounded" width={200} height={15} sx={{marginTop: '1.4rem'}} animation="wave" />
                        <Skeleton variant="rectangular" width={100} height={20} sx={{marginTop: '1.4rem'}} animation="wave" />
                    </Box>
                )
                :
                (
                    <Card sx={{maxWidth: '60rem'}} >
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                height="245"
                                image="/src/assets/img/posts/post-1.jpeg"
                                alt="coding"
                            />
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
                                    Как писать код быстро и безболезненно?
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil deleniti impedit quam dolorum quasi. Ipsa eum incidunt deleniti, deserunt voluptate, ad quia velit perferendis quos voluptatum quibusdam atque aspernatur.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil deleniti impedit quam dolorum quasi. Ipsa eum incidunt deleniti, deserunt voluptate, ad quia velit perferendis quos voluptatum quibusdam atque aspernatur.
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
                                        <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> создание сайтов
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
                                <IconButton>
                                    <HighlightOffIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                                </IconButton>
                            </Box>
                        </CardActions>
                    </Card>
                ) 
            }
            
            <Card sx={{maxWidth: '60rem'}} >
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="245"
                        image="/src/assets/img/posts/post-1.jpeg"
                        alt="coding"
                    />
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
                            Как писать код быстро и безболезненно?
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#D2D2D2'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil deleniti impedit quam dolorum quasi. Ipsa eum incidunt deleniti, deserunt voluptate, ad quia velit perferendis quos voluptatum quibusdam atque aspernatur.
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
                                <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> создание сайтов
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
                        <IconButton>
                            <HighlightOffIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>
            <Card sx={{maxWidth: '60rem'}} >
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="245"
                        image="/src/assets/img/posts/post-1.jpeg"
                        alt="coding"
                    />
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
                            Как писать код быстро и безболезненно?
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#D2D2D2'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil deleniti impedit quam dolorum quasi. Ipsa eum incidunt deleniti, deserunt voluptate, ad quia velit perferendis quos voluptatum quibusdam atque aspernatur.
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
                                <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> создание сайтов
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
                        <IconButton>
                            <HighlightOffIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>
            <Card sx={{maxWidth: '60rem'}} >
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="245"
                        image="/src/assets/img/posts/post-1.jpeg"
                        alt="coding"
                    />
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
                            Как писать код быстро и безболезненно?
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#D2D2D2'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil deleniti impedit quam dolorum quasi. Ipsa eum incidunt deleniti, deserunt voluptate, ad quia velit perferendis quos voluptatum quibusdam atque aspernatur.
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
                                <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> создание сайтов
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
                        <IconButton>
                            <HighlightOffIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>
            <Card sx={{maxWidth: '60rem'}} >
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="245"
                        image="/src/assets/img/posts/post-1.jpeg"
                        alt="coding"
                    />
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
                            Как писать код быстро и безболезненно?
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                color: '#D2D2D2'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil deleniti impedit quam dolorum quasi. Ipsa eum incidunt deleniti, deserunt voluptate, ad quia velit perferendis quos voluptatum quibusdam atque aspernatur.
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
                                <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> создание сайтов
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
                        <IconButton>
                            <HighlightOffIcon sx={{width: '2rem', height: '2rem', color: '#C4C4C4'}} />
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>

            <Pagination count={10} size="large" shape="rounded" color="primary" className="pagination" />
        </Box>
    )
}

export default PostList;