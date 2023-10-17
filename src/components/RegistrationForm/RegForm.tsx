import { userAPI } from "../../services/UserService";
import AuthForm from "../UI/AuthForm";

const RegForm = () => {
    const [createUser, {}] = userAPI.useCreateUserMutation();

    return (
        <>
            <AuthForm 
                title="Регистрация" 
                buttonText="Отправить" 
                link={{linkText: 'Войти в аккаунт', href: '/login'}}
                registration={true}
                endpoint={createUser} 
            />
        </>
    )
}

export default RegForm;