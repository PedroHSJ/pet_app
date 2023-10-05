import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard} from '../Screens/Dashboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Profile} from '../Screens/Profile';
import {useTheme} from 'styled-components/native';

export type TabRoutesParamList = {
    Dashboard: undefined;
    Profile: undefined;
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
                tabBarInactiveTintColor: colors.black,
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontFamily: 'Inter-Bold',
                    marginBottom: 10,
                },
                headerTintColor: colors.primary,
                headerTitleStyle: {
                    fontFamily: 'Inter-Bold',
                    letterSpacing: 1,
                },
                tabBarStyle: {
                    minHeight: 70,
                    paddingVertical: 10,
                    backgroundColor: colors.white,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowColor: colors.black,
                },
            }}>
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="home" size={40} color={color} />
                    ),
                    tabBarLabel: 'Início',
                }}
            />
            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="account" size={40} color={color} />
                    ),
                    tabBarLabel: 'Perfil',
                    headerTitle: 'Perfil',
                }}
            />
        </Navigator>
    );
};
