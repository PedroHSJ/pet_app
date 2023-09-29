import * as yup from 'yup';

export const Step1ValidationSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
        .string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
    confirmPassword: yup
        .string()
        .required('Confirmação de senha é obrigatória'),
    phone: yup.string().required('Telefone é obrigatório'),
});
