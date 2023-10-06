import {Home} from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens/Login';
import theme from '../styles/theme';
import {Step1} from '../Screens/SignUp/Step1';
import {IClient} from '../interfaces/IClient';
import {Step2} from '../Screens/SignUp/Step2';
import {VerifyEmail} from '../Screens/SignUp/VerifyEmail';
import {
    ForgetPasswordStep1,
    IForgetPasswordStep1,
} from '../Screens/ForgetPassword/Step1';
import {ForgetPasswordStep2} from '../Screens/ForgetPassword/Step2';
import {Image} from 'react-native';
import Logo from '../assets/images/Logo_primary.png';
interface IForgetPasswordStep3 {
    verificationCode: string;
    email: string;
}

export type GuestStackParamList = {
    Home: undefined;
    Login: undefined;
    Step1: undefined;
    Step2: Partial<IClient>;
    verifyEmail: Partial<IClient>;
    ForgetPasswordStep1: undefined;
    ForgetPasswordStep2: IForgetPasswordStep1;
    ForgetPasswordStep3: IForgetPasswordStep3;
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
                        // headerTitle: (
                        //     props, // App Logo
                        // ) => (
                        //     <Image
                        //         style={{
                        //             height: 50,
                        //             width: 50,
                        //         }}
                        //         source={Logo}
                        //         resizeMode="contain"
                        //     />
                        // ),
                        headerTitle: 'Esqueceu sua senha?',
                        headerTitleAlign: 'left',
                    }}
                />
                <Screen
                    name="ForgetPasswordStep2"
                    component={ForgetPasswordStep2}
                    options={{
                        headerTitle: 'Código de verificação',
                        headerTitleAlign: 'left',
                    }}
                />
                <Screen
                    name="ForgetPasswordStep3"
                    component={ForgetPasswordStep2}
                    options={{
                        headerShown: false,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
