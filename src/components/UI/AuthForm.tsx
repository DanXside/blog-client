import { FC, useContext, useState, ChangeEvent } from "react";
import { AuthContext } from "../context/context";
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";

import styles from '../LoginForm/index.module.scss';
import { Box, TextField, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../models/IUser";

type Inputs = {
    name: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
}

interface AuthProps {
    title: string;
    buttonText: string;
    link: {
        linkText: string;
        href: string;
    };
    registration: boolean;
    endpoint: (user: IUser) => any;
    result?: IUser | undefined;
    isError: boolean;
    error: any;
}


const AuthForm: FC<AuthProps> = ({title, buttonText, link, registration, endpoint, isError, error}) => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const [imgUrl, setImgUrl] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (values) => {
        if (registration) {
            values.avatar = imgUrl;
        }
        const {data} = await endpoint(values);
        if (isError) {
            alert(error.data.message);
        }
        if (data.token) {
            window.sessionStorage.setItem('token', `Bearer ${data.token}` as string);
        }
        setAuth(true);
    };

    const handleChange = async (event: ChangeEvent) => {
        try {
            const formData = new FormData();
            const target = event.target as HTMLInputElement;
            if (!target.files) {
                return;
            }
            const file = target.files[0];
            formData.append('image', file);
            const {data} = await axios.post('http://localhost:3001/upload', formData);
            setImgUrl(data.url);
        }  catch (e) {
            console.warn(e);
            alert('Не удалось загрузить файл');
        } 
    }

    return (
        <Box className={styles.loginWrap}>
            <Typography variant='h2' component="h2" className={styles.loginTitle} sx={{
                fontWeight: 600,
                fontSize: '3rem'
            }} >
                {title}
            </Typography>
            <Box component="form" className={styles.loginForm} onSubmit={handleSubmit(onSubmit)} >
                {
                    registration &&
                    <TextField 
                        className={styles.loginAddInput} 
                        variant="standard" 
                        label="Введите своё имя"
                        error={Boolean(errors.name?.message)} 
                        sx={{marginBottom: '1.4rem'}}
                        helperText={errors.name?.message}
                        {...register('name', {required: 'Введите ваше имя'})} 
                    />
                }
                <TextField 
                    className={styles.loginInput} 
                    variant="standard" 
                    label="Email"
                    type="email"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register('email', {required: 'Укажите почту'})} 
                />
                <TextField 
                    className={styles.loginInput} 
                    variant="standard" 
                    label="Пароль"
                    type="password"
                    error={Boolean(errors.password?.message)} 
                    sx={{marginTop: '1.4rem'}}
                    helperText={errors.password?.message}
                    {...register('password', {required: 'Укажите пароль'})}
                />
                {
                    registration &&
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{
                        width: '20rem',
                        margin: '0 auto',
                        marginTop: '2.5rem',
                        backgroundColor: '#3137C9',
                        fontSize: '1.2rem',
                        fontWeight: 400
                    }}>
                        Загрузить аватарку
                        <input 
                            className={styles.fileInput} 
                            type="file"
                            {...register('avatar')}
                            onChange={(e) => handleChange(e)}
                        />
                    </Button>
                }
                <Button type="submit" variant="contained" sx={{
                    width: '16rem',
                    margin: '0 auto',
                    marginTop: '2.5rem',
                    backgroundColor: '#3137C9',
                    fontSize: '1.4rem',
                    fontWeight: 400
                }} >
                    {buttonText}
                </Button>
            </Box>
            <Box className={styles.linkBox}>
                <Link className={styles.registrationLink} to={link.href}>
                    {link.linkText}
                </Link>
            </Box>
            {
                isAuth && <Navigate to="/" />
            }
        </Box>
    )
};

export default AuthForm;