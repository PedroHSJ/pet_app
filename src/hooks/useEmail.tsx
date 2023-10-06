import {useState} from 'react';
import {
    sendEmailApi,
    sendVerificationCodeUpdatePasswordApi,
} from '../services/EmailApi';

export const useEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    const sendEmailVerificationCode = async (email: string, name: string) => {
        try {
            setLoading(true);
            setError('');
            console.log('email', email);
            console.log('name', name);
            const code = await sendEmailApi({email, name});
            console.log('code', code);
            setVerificationCode(code);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const sendEmailVerificationCodeUpdatePassword = async (email: string) => {
        try {
            setLoading(true);
            setError('');
            const code = await sendVerificationCodeUpdatePasswordApi({email});
            setVerificationCode(code);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        success,
        verificationCode,
        sendEmailVerificationCode,
        sendEmailVerificationCodeUpdatePassword,
    };
};
