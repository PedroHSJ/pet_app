import {Text, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {Button} from '../../components/Button';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {firstAndSecondName} from '../../utils';

export const Dashboard = () => {
    const {logout, user} = useAuth();
    const navigation = useNavigation();
    useEffect(() => {
        if (!user) return;
        navigation.setOptions({
            title: `Olá, ${firstAndSecondName(user?.name)}`,
        });
    }, [user]);

    return (
        <View>
            <Text>Dashboard</Text>
            <Button type="default" onPress={logout}>
                Sair
            </Button>
        </View>
    );
};
