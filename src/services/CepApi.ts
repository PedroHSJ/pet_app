import {AxiosResponse} from 'axios';
import {api} from './index';
import {ICep} from '../interfaces/ICep';

export const getCep = async (cep: string): Promise<ICep> => {
    const response = await api.get<unknown, AxiosResponse>(
        `https://viacep.com.br/ws/${cep}/json`,
    );
    if (response.data) {
        const mappedData: ICep = {
            postalCode: response.data.cep,
            state: response.data.uf,
            city: response.data.localidade,
            neighborhood: response.data.bairro,
            street: response.data.logradouro,
            number: '',
            complement: '',
        };
        return mappedData;
    }
    return {} as ICep;
};
