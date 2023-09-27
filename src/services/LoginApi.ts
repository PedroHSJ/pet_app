import {AxiosResponse} from 'axios';
import {api} from '.';
import {ILogin} from '../interfaces/ILogin';
import {IResponseToken} from '../interfaces/IResponseToken';

const login = async (data: ILogin) => {
    const response = await api.post<unknown, AxiosResponse<IResponseToken>>(
        '/auth',
        {
            email: data.email,
            password: data.password,
            scope: 'CLIENT',
        },
    );
    return response.data;
};

export {login};
