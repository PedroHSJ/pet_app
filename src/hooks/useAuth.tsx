import {createContext, useContext, useState} from 'react';
import {ILogin} from '../interfaces/ILogin';
import {IClient} from '../interfaces/IClient';
import {login} from '../services/LoginApi';
import {api} from '../services';
import {getClientById} from '../services/ClientApi';
import jwt from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
    user: IClient | null;
    token: string;
    error: string;
    loading: boolean;
    signIn: (credentials: ILogin) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}) {
    const [user, setUser] = useState<IClient | null>(null);
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const signIn = async (credentials: ILogin) => {
        try {
            setLoading(true);
            setError('');
            const {token} = await login(credentials);
            console.log('token', token);
            setToken(token);

            if (api.defaults.headers) {
                api.defaults.headers.Authorization = `Bearer ${token}`;
            }

            const userId = jwt<{id: string}>(token).id;

            const {items} = await getClientById(userId);
            if (items.length === 0) {
                throw new Error('Usuário não encontrado');
            }
            const user = items[0];

            await AsyncStorage.setItem('@token', token);
            await AsyncStorage.setItem('@user', JSON.stringify(user));

            setUser(user);
        } catch (error) {
            setError('');
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setUser(null);
        setToken('');
        await AsyncStorage.removeItem('@token');
        await AsyncStorage.removeItem('@user');
    };

    return (
        <AuthContext.Provider
            value={{user, token, error, loading, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export {AuthProvider, useAuth};
