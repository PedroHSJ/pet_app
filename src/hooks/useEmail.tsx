import {useState} from 'react';
import {verifyEmail} from '../services/EmailApi';

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
            const code = await verifyEmail({email, name});
            console.log('code', code);
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
    };
};
