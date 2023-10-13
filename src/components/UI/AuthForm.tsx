import { FC } from "react";
import { Link } from 'react-router-dom';
import styles from '../LoginForm/index.module.scss';
import { Box, TextField, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface AuthProps {
    title: string;
    buttonText: string;
    link: {
        linkText: string;
        href: string;
    };
    registration: boolean;
}

const AuthForm: FC<AuthProps> = ({title, buttonText, link, registration}) => {
    return (
        <Box className={styles.loginWrap}>
            <Typography variant='h2' component="h2" className={styles.loginTitle} sx={{
                fontWeight: 600,
                fontSize: '3rem'
            }} >
                {title}
            </Typography>
            <Box component="form" className={styles.loginForm} >
                {
                    registration &&
                    <TextField className={styles.loginAddInput} variant="standard" label="Введите своё имя" sx={{marginBottom: '1.4rem'}} />
                }
                <TextField className={styles.loginInput} variant="standard" label="Email" />
                <TextField className={styles.loginInput} variant="standard" label="Пароль" sx={{marginTop: '1.4rem'}} />
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
                        <input className={styles.fileInput} type="file" />
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
        </Box>
    )
};

export default AuthForm;