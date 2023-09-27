import * as yup from 'yup';

export const FormLoginValidationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
});
