import * as Yup from 'yup';
import {MIN_PASSWORD_LENGTH, REQUIRED_FIELD} from '../constants';

export const ConfirmPasswordSchema = Yup.object().shape({
    password: Yup.string().min(6, MIN_PASSWORD_LENGTH).required(REQUIRED_FIELD),
    confirmPassword: Yup.string()
        .min(6, MIN_PASSWORD_LENGTH)
        .required(REQUIRED_FIELD),
});
