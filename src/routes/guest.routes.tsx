import {Home} from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens/Login';
import theme from '../styles/theme';

export type GuestStackParamList = {
    Home: undefined;
    Login: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<GuestStackParamList>();

export const GuestRoutes = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
