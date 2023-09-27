import {Text, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {Button} from '../../components/Button';

export const Dashboard = () => {
    const {logout} = useAuth();
    return (
        <View>
            <Text>Dashboard</Text>
            <Button type="default" onPress={logout}>
                Sair
            </Button>
        </View>
    );
};
