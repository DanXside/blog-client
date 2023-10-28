import { ChangeEvent, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Header from "../../UI/header";
import { AuthContext } from "../../context/context";

import styles from './index.module.scss';
import { Box, Button, TextField } from "@mui/material";

import UploadButton from "../../UI/UploadButton";
import SimpleMdeReact, { SimpleMDEReactProps } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { postsAPI } from "../../../services/PostsService";
import { useParams } from "react-router-dom";

const CreatePost = () => {
    const tags: string[] = [
        'сайты',
        'о жизни',
        'разработка',
        'it компания',
        'транспорт',
        'os',
        'mobile app',
        'игры'
    ];
    const params = useParams();
    const postId = params.id as string;

    const {isAuth} = useContext(AuthContext);
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [textValue, setText] = useState('');
    const [useTags, setUseTags] = useState<string[]>([]);

    const [createPost, {}] = postsAPI.useCreatePostMutation();
    const [updatePost, {}] = postsAPI.useUpdatePostMutation();
    const {data} = postsAPI.useGetPostQuery(postId);

    useEffect(() => {
        if (postId) {
            setImgUrl(data?.postImage as string);
            setTitle(data?.title as string);
            setText(data?.text as string);
            if (data) {
                setUseTags([...data.sections] as string[]);
            }
        }
    }, [data])

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
    }, []);

    const onSubmit = async () => {
        try {
            const fields = {
                _id: postId,
                title: title,
                text: textValue,
                postImage: imgUrl,
                sections: useTags
            };
            if (postId) {
                await updatePost(fields);
                alert('Пост успешно обновлён!');
            } else {
                await createPost(fields);
                alert('Пост успешно создан :)');
            }
        } catch (e) {
            console.log(e);
            alert('Произошла ошибка :(')
        }
    };

    return (
        <>
            <Header />
            {
                isAuth
                ?
                    <Box className={styles.create} >
                        {
                            postId
                            ?
                            <h2 className={styles.create__title} >Редактирование статьи</h2>
                            :
                            <h2 className={styles.create__title} >Создание статьи</h2>
                        }
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
                                    <img src={`95.163.233.134:3001${imgUrl}`} alt="preview" />
                                </Box>
                            :
                                <UploadButton btnText="Загрузить превью" setImgUrl={setImgUrl} />
                        }
                        <Box margin="0 auto" marginTop="2rem" >
                            <TextField 
                                className={styles.create__title_input}
                                label="Введите заголовок статьи..."
                                variant="outlined"
                                type="text"
                                value={title}
                                onChange={titleChange}
                            />
                        </Box>
                        <Box className={styles.create__tags_wrap} >
                            {tags.map((tag, index) => (
                                <div 
                                    tabIndex={-1} 
                                    key={index} 
                                    className={styles.create__tag_box}
                                    onClick={() => setUseTags([...useTags, tag])}
                                >
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3rem',
                            fontWeight: 400,
                            fontSize: '1.4rem',
                            color: '#ffffff',
                            marginTop: '2rem'
                        }}>
                            Выбранные теги:
                            <Box className={styles.create__selected_tags} >
                                {useTags.map((tag, index) => (
                                    <span key={index} >#{tag}</span>
                                ))}
                            </Box>
                        </Box>
                        <SimpleMdeReact className={styles.create__editor} value={textValue} onChange={textChange} options={options as SimpleMDEReactProps} />
                        <Button 
                            type="submit" 
                            variant="outlined"
                            onClick={onSubmit} 
                            sx={{
                                width: '16rem',
                                fontWeight: 400,
                                fontSize: '1.4rem',
                                borderColor: '#3137C9',
                                margin: '0 auto',
                                marginTop: '2rem'
                            }} 
                        >
                            {
                                postId
                                ?
                                    <span>Обновить пост</span>
                                :
                                    <span>Создать пост</span>
                            }
                            
                        </Button>
                    </Box>
                :
                    <h2 className={styles.create__title} >У вас нет доступа к созданию статьи. Пожалуйста, зарегистрируйтесь или авторизуйтесь на портале.</h2>
            }
        </>
    )
}

export default CreatePost;