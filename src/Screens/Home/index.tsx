import {
    CarouselImage,
    CarouselWrapper,
    ContainerFooter,
    Content,
    Image,
    InfoWrapper,
    Subtitle,
    TextFooter,
    TextFooterLink,
    Title,
} from './styles';
import Logo from '../../assets/images/Logo_primary.png';
import {Button} from '../../components/Button';
import {Container} from '../../components/Container/styles';
import {useNavigation} from '@react-navigation/native';
import {CarouselComponent} from '../../components/Carousel';
import {Dimensions, Text, View} from 'react-native';
import Dog1 from '../../assets/images/dog_1.png';
import Dog2 from '../../assets/images/dog_2.png';
import Dog3 from '../../assets/images/dog_3.png';
import Carousel from 'react-native-reanimated-carousel';
export const Home = ({navigation}) => {
    const handleClickNavigateToLogin = () => {
        navigation.navigate('Login');
    };
    const handleClickNavigateToSignUp = () => {
        navigation.navigate('Step1');
    };
    const width = Dimensions.get('window').width;
    const data = [
        {
            image: Dog1,
        },
        {
            image: Dog2,
        },
        {
            image: Dog3,
        },
    ];

    return (
        <Container>
            <Content>
                <CarouselWrapper>
                    <CarouselComponent
                        data={data}
                        width={width}
                        key={1}
                        renderItems={({item}) => {
                            return <CarouselImage source={item.image} />;
                        }}
                    />
                </CarouselWrapper>
                <InfoWrapper>
                    <Image source={Logo} alt="Logo da empresa" />
                    <Title>Olá, seja bem-vindo!</Title>
                    <Subtitle>
                        Faça login ou cadastre-se para continuar.
                    </Subtitle>
                    <Button
                        type="default"
                        onPress={handleClickNavigateToSignUp}>
                        Cadastre-se
                    </Button>
                    <ContainerFooter onPress={handleClickNavigateToLogin}>
                        <TextFooter>
                            Já tem uma conta?{' '}
                            <TextFooterLink>Entrar</TextFooterLink>
                        </TextFooter>
                    </ContainerFooter>
                </InfoWrapper>
            </Content>
        </Container>
    );
};
