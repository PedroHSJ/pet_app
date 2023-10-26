import {useAuth} from '../hooks/useAuth';
import {AuthRoutes} from './auth.routes';
import {GuestRoutes} from './guest.routes';

export const Routes = () => {
    //const {token} = useAuth();
    const token = 'token';
    return token ? <AuthRoutes /> : <GuestRoutes />;
};
