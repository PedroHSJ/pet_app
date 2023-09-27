import axios from 'axios';
import {Alert} from 'react-native';
import {BASE_API_URL} from '../config/config';

const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: 3000,
});

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 500) {
            Alert.alert('Erro', 'Erro no servidor');
        }
    },
);

export {api};
