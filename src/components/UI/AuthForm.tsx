import { FC, useContext, useEffect } from "react";
import { AuthContext } from "../context/context";
import { Link, Navigate } from 'react-router-dom';
import styles from '../LoginForm/index.module.scss';
import { Box, TextField, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../models/IUser";
import { userAPI } from "../../services/UserService";

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
}

const AuthForm: FC<AuthProps> = ({title, buttonText, link, registration, endpoint}) => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (values) => {
        endpoint(values);
        const {data} = await endpoint(values);
        if (data.token && !registration) {
            window.localStorage.setItem('token', `Bearer ${data.token}` as string);
        }
        setAuth(true);
    };

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