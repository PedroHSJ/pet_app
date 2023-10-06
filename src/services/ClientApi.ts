import {api} from '.';
import {IClient} from '../interfaces/IClient';
import {IResponse} from '../interfaces/IResponse';

export const getClientById = async (
    id: string,
): Promise<IResponse<IClient>> => {
    const reponse = await api.get<IResponse<IClient>>(`/client?id=${id}`);
    return reponse.data;
};

export const createClient = async (client: IClient): Promise<{id: string}> => {
    const reponse = await api.post<{id: string}>('/client', client);
    return reponse.data;
};

export const updatePasswordClient = async (
    password: string,
    email: string,
    verificationCode: string,
): Promise<{message: string}> => {
    const reponse = await api.put<{message: string}>(
        '/client/update-password',
        {
            password,
            email,
            verificationCode,
        },
    );
    return reponse.data;
};
