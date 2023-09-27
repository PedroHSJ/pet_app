import {api} from '.';
import {IClient} from '../interfaces/IClient';
import {IResponse} from '../interfaces/IResponse';

export const getClientById = async (
    id: string,
): Promise<IResponse<IClient>> => {
    const reponse = await api.get<IResponse<IClient>>(`/client?id=${id}`);
    return reponse.data;
};

export const createClient = async (
    client: IClient,
): Promise<IResponse<IClient>> => {
    const reponse = await api.post<IResponse<IClient>>('/client', client);
    return reponse.data;
};
