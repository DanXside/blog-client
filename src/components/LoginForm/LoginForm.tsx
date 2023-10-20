import { userAPI } from "../../services/UserService";
import AuthForm from "../UI/AuthForm";

const LoginForm = () => {
    const [loginUser, {isError, error}] = userAPI.useLoginUserMutation();

    return (
        <>
            <AuthForm 
                title="Вход" 
                buttonText="Войти" 
                link={{linkText: 'Регистрация', href: '/registration'}}
                registration={false}
                endpoint={loginUser}
                isError={isError}
                error={error}
            />
        </>
    )
}

export default LoginForm;