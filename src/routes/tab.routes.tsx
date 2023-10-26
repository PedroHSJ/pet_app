import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard} from '../Screens/Dashboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Profile} from '../Screens/Profile';
import {useTheme} from 'styled-components/native';
import Home from '../Screens/Home';

export type TabRoutesParamList = {
    Home: undefined;
    Profile: undefined;
    Schedule: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<TabRoutesParamList>();

export const TabRoutes = (): JSX.Element => {
    const {colors} = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.white,
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    shadowRadius: 3.84,
                    elevation: 15,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.gray,
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontFamily: 'Inter-thin',
                    marginBottom: 10,
                },
                headerTintColor: colors.primary,
                headerTitleStyle: {
                    fontFamily: 'Inter-Bold',
                    fontSize: 15,
                },
                tabBarStyle: {
                    minHeight: 70,
                    paddingVertical: 10,
                    backgroundColor: colors.white,
                    // borderTopLeftRadius: 20,
                    // borderTopRightRadius: 20,
                    shadowColor: colors.black,
                },
            }}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="home" size={25} color={color} />
                    ),
                    tabBarLabel: 'Início',
                }}
            />
            <Screen
                name="Schedule"
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="calendar" size={25} color={color} />
                    ),
                    tabBarLabel: 'Agendar',
                    headerTitle: 'Agendar',
                }}
            />
            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="account" size={25} color={color} />
                    ),
                    tabBarLabel: 'Perfil',
                    headerTitle: 'Perfil',
                }}
            />
        </Navigator>
    );
};
