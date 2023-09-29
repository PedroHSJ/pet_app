import * as yup from 'yup';
import {INVALID_EMAIL, MIN_PASSWORD_LENGTH, REQUIRED_FIELD} from '../constants';

export const FormLoginValidationSchema = yup.object().shape({
    email: yup.string().email(INVALID_EMAIL).required(REQUIRED_FIELD),
    password: yup.string().min(6, MIN_PASSWORD_LENGTH).required(REQUIRED_FIELD),
});
