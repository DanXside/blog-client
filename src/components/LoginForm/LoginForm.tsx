import AuthForm from "../UI/AuthForm";

const LoginForm = () => {
    return (
        <>
            <AuthForm 
                title="Вход" 
                buttonText="Войти" 
                link={{linkText: 'Регистрация', href: '/registration'}}
                registration={false} 
            />
        </>
    )
}

export default LoginForm;