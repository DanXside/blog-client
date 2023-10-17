import { userAPI } from "../../services/UserService";
import AuthForm from "../UI/AuthForm";

const LoginForm = () => {
    const [loginUser, {}] = userAPI.useLoginUserMutation();

    return (
        <>
            <AuthForm 
                title="Вход" 
                buttonText="Войти" 
                link={{linkText: 'Регистрация', href: '/registration'}}
                registration={false}
                endpoint={loginUser}
            />
        </>
    )
}

export default LoginForm;