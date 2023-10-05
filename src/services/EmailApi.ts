import {api} from '.';
import {IResponse} from '../interfaces/IResponse';

interface IVerifyEmail {
    email: string;
    name: string;
}

export const verifyEmail = async ({email, name}: IVerifyEmail) => {
    console.log('verifyEmail');
    const response = await api.post(`/email/send-verification-code`, {
        email,
        name,
    });
    console.log('resposne', response.data);
    return response.data;
};
