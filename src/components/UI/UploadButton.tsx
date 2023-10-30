import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import styles from '../pages/CreatePost/index.module.scss';
import { ChangeEvent, FC } from "react";

interface UploadProps {
    btnText: string;
    setImgUrl: (value: string) => void;
}

const UploadButton: FC<UploadProps> = ({btnText, setImgUrl}) => {

    const handleChange = async (event: ChangeEvent) => {
        try {
            const formData = new FormData();
            const target = event.target as HTMLInputElement;
            if (!target.files) {
                return;
            }
            const file = target.files[0];
            formData.append('image', file);
            const {data} = await axios.post('http://pb-blog.ru:3001/upload', formData);
            setImgUrl(data.url);
        }  catch (e) {
            console.warn(e);
            alert('Не удалось загрузить файл');
        } 
    };


    return (
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{
            width: '20rem',
            margin: '0 auto',
            marginTop: '2.5rem',
            backgroundColor: '#3137C9',
            fontSize: '1.2rem',
            fontWeight: 400
        }}>
            {btnText}
            <input 
                className={styles.fileInput} 
                type="file"
                onChange={handleChange}
            />
        </Button>
    )
}

export default UploadButton;