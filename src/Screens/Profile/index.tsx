import {Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useAuth} from '../../hooks/useAuth';
import {
    CardWrapper,
    Container,
    Content,
    InfoWrapper,
    LogoutButton,
    LogoutButtonText,
    ProfileCardText,
    ProfileEmail,
    ProfileName,
    ProfilePhone,
    WrapperEmail,
    WrapperPhone,
    WrapperProfile,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {firstAndSecondName, formatPhone} from '../../utils';
import {ProfileCard} from '../../components/cards/ProfileCard';
import {useTheme} from 'styled-components/native';
export const Profile = ({navigation}) => {
    const {logout, user} = useAuth();
    const {colors} = useTheme();
    // useEffect(() => {
    //     if (!user) return;
    //     navigation.setOptions({
    //         title: `${firstAndSecondName(user?.name)}`,
    //         //CENTRALIZANDO NOME
    //     });
    // }, [user]);

    const handleClickLogout = () => {
        Alert.alert('Sair', 'Deseja realmente sair?', [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: () => logout(),
            },
        ]);
    };

    const handleClickMyPets = () => {
        navigation.navigate('Pets', user?.pets);
    };

    return (
        <Container>
            <Content>
                <InfoWrapper>
                    <WrapperProfile>
                        <ProfileName>{user?.name}</ProfileName>
                        <LogoutButton onPress={handleClickLogout}>
                            <LogoutButtonText>Sair</LogoutButtonText>
                            <Icon name="logout" size={20} color="red" />
                        </LogoutButton>
                    </WrapperProfile>
                    <WrapperEmail>
                        <Icon name="email" size={20} color={colors.primary} />
                        <ProfileEmail>{user?.email}</ProfileEmail>
                    </WrapperEmail>
                    <WrapperPhone>
                        <Icon name="phone" size={20} color={colors.primary} />
                        <ProfilePhone>{formatPhone(user?.phone)}</ProfilePhone>
                    </WrapperPhone>
                </InfoWrapper>
                <CardWrapper>
                    <ProfileCard first={true}>
                        <Icon
                            name="account-circle"
                            size={20}
                            color={colors.primary}
                        />
                        <ProfileCardText>Editar conta</ProfileCardText>
                    </ProfileCard>
                    <ProfileCard onPress={handleClickMyPets}>
                        <Icon
                            name="dog-side"
                            size={20}
                            color={colors.primary}
                        />
                        <ProfileCardText>Meus pets</ProfileCardText>
                    </ProfileCard>
                    <ProfileCard last={true}>
                        <Icon name="paw" size={20} color={colors.primary} />
                        <ProfileCardText>Adicionar um novo pet</ProfileCardText>
                    </ProfileCard>
                </CardWrapper>
            </Content>
        </Container>
    );
};
