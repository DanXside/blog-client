import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { postsAPI } from "../../../services/PostsService";
import Header from "../../UI/header";
import { Box, Button, TextField } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import styles from './index.module.scss';
import Markdown from 'react-markdown'
import { commentAPI } from "../../../services/CommentService";
import { userAPI } from "../../../services/UserService";

type Inputs = {
    text: string;
}

const DetailPost = () => {
    const params = useParams();
    const postId = params.id as string;

    const {data} = postsAPI.useGetPostQuery(postId as string, { refetchOnMountOrArgChange: true });
    const {data: authUser} = userAPI.useGetUserQuery(undefined);
    const [createComment, {}] = commentAPI.useCreateCommentMutation();
    const {data: comments} = commentAPI.useGetCommentsQuery(postId);

    const postDate = new Date(data?.createdAt)?.toJSON()?.split('T')[0];

    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
        try {
            const doc = {
                text: data.text,
                user: authUser?.id as string,
                post: postId
            };
            createComment(doc);
            e?.target.reset();
            alert('Комментарий успешно отправлен :)');
        } catch (e) {
            alert('Произошла ошибка при отправке')
        }
    }
    
    return (
        <>
            <Header />
            <Box className={styles.postWrap} >
                <h2 className={styles.postTitle} >{data?.title}</h2>
                <Box display="flex" alignItems="center" gap="1rem" >
                    <span className={styles.postInfo} >{postDate}</span>
                    <FiberManualRecordIcon sx={{width: '1rem', height: '1rem', color: '#C4C4C4'}} /> 
                    {data?.sections.map(section => <span className={styles.postTags} key={section} style={{marginRight: '0.8rem'}}>#{section}</span>)}
                </Box>
                <Box className={styles.postImage} >
                    {
                        data?.postImage
                        ?
                        <img src={`95.163.233.134:3001${data?.postImage}`} alt="post" />
                        :
                        <img src="/src/assets/img/posts/post-1.jpeg" alt="post" />
                    }
                </Box>
                <Box className={styles.postText} >
                    <Markdown children={data?.text} />
                </Box>
                <h2 className={styles.postCommentTitle} >Обсуждение</h2>
                <form className={styles.postForm} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        className={styles.postFormInput} 
                        variant="standard" 
                        label="Что думаете?" 
                        type="text"
                        error={Boolean(errors.text?.message)}
                        helperText={errors.text?.message}
                        {...register('text', {required: 'Введите комментарий', minLength: 2})}
                    />
                    <Button type="submit" variant="contained" sx={{
                        width: '16rem',
                        marginTop: '2.5rem',
                        backgroundColor: '#3137C9',
                        fontSize: '1.4rem',
                        fontWeight: 400
                    }} >
                        Отправить
                    </Button>
                </form>
                <Box className={styles.postComments} >
                    {comments?.map((comment, i) => (
                        <Box key={i} className={styles.postCommentsItem} >
                            <Box display="flex" alignItems="center" gap="1rem" >
                                <Box className={styles.postCommentsItem__userAvatar} >
                                    {
                                        comment?.user.avatar
                                        ?
                                        <img src={`95.163.233.134:3001${comment?.user.avatar}`} alt="avatar" />
                                        :
                                        <img src="/src/assets/img/avatar/noname.png" />
                                    }
                                </Box>
                                <span className={styles.postCommentsItem__userName} >{comment?.user.name}</span>
                            </Box>
                            <Box className={styles.postCommentsItem__text} component="p" >
                                {comment?.text}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default DetailPost;