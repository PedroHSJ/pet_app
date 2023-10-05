import {Home} from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens/Login';
import theme from '../styles/theme';
import {Step1} from '../Screens/SignUp/Step1';
import {IClient} from '../interfaces/IClient';
import {Step2} from '../Screens/SignUp/Step2';
import {VerifyEmail} from '../Screens/SignUp/VerifyEmail';
import {ForgetPasswordStep1} from '../Screens/ForgetPassword/Step1';

export type GuestStackParamList = {
    Home: undefined;
    Login: undefined;
    Step1: undefined;
    Step2: Partial<IClient>;
    verifyEmail: Partial<IClient>;
    ForgetPasswordStep1: undefined;
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

                <Screen
                    name="Step1"
                    component={Step1}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Step2"
                    component={Step2}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="verifyEmail"
                    component={VerifyEmail}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="ForgetPasswordStep1"
                    component={ForgetPasswordStep1}
                    options={{
                        headerShown: false,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
