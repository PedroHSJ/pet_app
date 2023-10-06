import {Home} from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens/Login';
import {Dashboard} from '../Screens/Dashboard';
import {TabRoutes} from './tab.routes';
import {IPet} from '../interfaces/IPet';
import {Pets} from '../Screens/Pets';
import {useTheme} from 'styled-components/native';

export type AuthStackParamList = {
    TabRoutes: undefined;
    Pets: IPet[];
};

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes = (): JSX.Element => {
    const {colors} = useTheme();
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTintColor: colors.black,
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold',
                        fontSize: 15,
                    },
                }}>
                <Screen
                    name="TabRoutes"
                    component={TabRoutes}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Pets"
                    component={Pets}
                    options={{
                        headerTitle: 'Meus Pets',
                        headerTitleAlign: 'center',
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
