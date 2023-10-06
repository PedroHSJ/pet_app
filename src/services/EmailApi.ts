import {api} from '.';
import {IResponse} from '../interfaces/IResponse';

interface IVerifyEmail {
    email: string;
    name: string;
}

export const sendEmailApi = async ({email, name}: IVerifyEmail) => {
    const response = await api.post(`/email/send-verification-code`, {
        email,
        name,
    });
    return response.data;
};

export const sendVerificationCodeUpdatePasswordApi = async ({email}) => {
    const response = await api.post(
        `/email/update-password/send-verification-code`,
        {
            email,
        },
    );
    return response.data;
};
