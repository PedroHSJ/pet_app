import {Home} from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens/Login';
import theme from '../styles/theme';
import {Dashboard} from '../Screens/Dashboard';

export type AuthStackParamList = {
    Dashboard: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: false,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
