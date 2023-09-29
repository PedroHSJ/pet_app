import {useState} from 'react';
import {ICep} from '../interfaces/ICep';
import {getCep} from '../services/CepApi';

const useCep = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [response, setResponse] = useState<ICep | undefined>();

    const get = async (cep: string) => {
        cep = cep.replace(/\D/g, '');
        if (cep.length < 8) return;

        try {
            setLoading(true);
            const response = await getCep(cep);
            setResponse(response);
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return {
        response,
        error,
        loading,
        success,
        get,
    };
};

export {useCep};
