import {useState} from 'react';
import {IClient} from '../interfaces/IClient';
import {createClient, updatePasswordClient} from '../services/ClientApi';

export const useClient = () => {
    const [client, setClient] = useState<IClient | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState(false);

    const create = async (data: IClient) => {
        try {
            setLoading(true);
            setError('');
            setSuccess(false);
            const {id} = await createClient(data);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const updatePassword = async (
        password: string,
        email: string,
        verificationCode: string,
    ) => {
        try {
            setLoading(true);
            setError('');
            setSuccess(false);
            const response = await updatePasswordClient(
                password,
                email,
                verificationCode,
            );
            setSuccess(true);
        } catch (error) {
            setError(error.message);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return {
        client,
        loading,
        error,
        success,
        create,
        updatePassword,
    };
};
