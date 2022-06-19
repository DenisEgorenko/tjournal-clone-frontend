import * as yup from 'yup';


export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Требуется почта'),
    password: yup.string().min(6, 'Длина пароля должна быть более 6 символов').required('Требуется пароль'),
});

export const RegisterFormSchema = yup.object().shape({
    fullname: yup.string().required('Требуется ваше Имя и Фамилия'),
}).concat(LoginFormSchema);