import { ChangeEvent, useCallback, useContext, useMemo, useState } from "react";
import Header from "../../UI/header";
import { AuthContext } from "../../context/context";

import styles from './index.module.scss';
import { Box, Button, TextField } from "@mui/material";

import UploadButton from "../../UI/UploadButton";
import SimpleMdeReact, { SimpleMDEReactProps } from "react-simplemde-editor";

const CreatePost = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [textValue, setText] = useState('');

    const options = useMemo(
        () => ({
          spellChecker: false,
          maxHeight: '400px',
          autofocus: true,
          placeholder: 'Введите текст...',
          status: false
        }),
        [],
    );

    const titleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }, [title]);

    const textChange = useCallback((value: string) => {
        setText(value);
    }, [])
    
    return (
        <>
            <Header />
            {
                isAuth
                ?
                    <Box className={styles.create} >
                        <h2 className={styles.create__title} >Создание статьи</h2>
                        {
                            imgUrl
                            ?
                                <Box className={styles.create__preview} >
                                    <Button variant="contained" color="error" onClick={() => setImgUrl('')} sx={{
                                        width: '16rem',
                                        fontSize: '1.2rem',
                                        margin: '0 auto'
                                    }} >
                                        Удалить превью
                                    </Button>
                                    <img src={`http://localhost:3001${imgUrl}`} alt="preview" />
                                </Box>
                            :
                                <UploadButton btnText="Загрузить превью" setImgUrl={setImgUrl} />
                        }
                        <Box margin="0 auto" marginTop="2rem" >
                            <TextField 
                                className={styles.create__title_input}
                                label="Введите заголовок статьи..."
                                variant="outlined"
                                onChange={titleChange}
                            />
                        </Box>
                        <SimpleMdeReact value={textValue} onChange={textChange} options={options as SimpleMDEReactProps} />
                    </Box>
                :
                    <h2 className={styles.create__title} >У вас нет доступа к созданию статьи. Пожалуйста, зарегистрируйтесь или авторизуйтесь на портале.</h2>
            }
        </>
    )
}

export default CreatePost;