import AuthForm from "../UI/AuthForm";

const RegForm = () => {
    return (
        <>
            <AuthForm 
                title="Регистрация" 
                buttonText="Отправить" 
                link={{linkText: 'Войти в аккаунт', href: '/login'}}
                registration={true} 
            />
        </>
    )
}

export default RegForm;