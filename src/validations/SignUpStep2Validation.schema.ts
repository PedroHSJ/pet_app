import * as yup from 'yup';
import {REQUIRED_FIELD} from '../constants';

export const SignUpStep2Validation = yup.object().shape({
    postalCode: yup.string().required(REQUIRED_FIELD),
    state: yup.string().required(REQUIRED_FIELD),
    city: yup.string().required(REQUIRED_FIELD),
    neighborhood: yup.string().required(REQUIRED_FIELD),
    street: yup.string().required(REQUIRED_FIELD),
    number: yup.string().required(REQUIRED_FIELD),
    complement: yup.string(),
});
