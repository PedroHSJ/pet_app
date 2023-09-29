import {
    ContainerFooter,
    Image,
    Subtitle,
    TextFooter,
    TextFooterLink,
    Title,
} from './styles';
import Logo from '../../assets/images/Logo_primary.png';
import {Button} from '../../components/Button';
import {Container} from '../../components/Container/styles';
import {useNavigation} from '@react-navigation/native';

export const Home = ({navigation}) => {
    const handleClickNavigateToLogin = () => {
        navigation.navigate('Login');
    };
    const handleClickNavigateToSignUp = () => {
        navigation.navigate('Step1');
    };
    return (
        <Container>
            <Image source={Logo} alt="Logo da empresa" />
            <Title>Olá, seja bem-vindo!</Title>
            <Subtitle>Faça login ou cadastre-se para continuar.</Subtitle>
            <Button type="default" onPress={handleClickNavigateToSignUp}>
                Cadastre-se
            </Button>
            <ContainerFooter onPress={handleClickNavigateToLogin}>
                <TextFooter>
                    Já tem uma conta? <TextFooterLink>Entrar</TextFooterLink>
                </TextFooter>
            </ContainerFooter>
        </Container>
    );
};
