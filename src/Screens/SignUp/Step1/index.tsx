import {useForm} from 'react-hook-form';
import {BackgroundImage, Image} from '../../Login/styles';
import {Container, Content, Title} from './styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {IClient} from '../../../interfaces/IClient';
export const Step1 = () => {
    const navigation = useNavigation();
    const {
        control,
        formState: {errors},
        handleSubmit,
    } = useForm<IClient>();

    const onSubmit = (data: IClient) => {
        console.log(data);
        navigation.navigate('Step2', data);
    };
    return (
        <Container>
            <BackgroundImage source={ImageBack} />
            <Content>
                <Image source={Logo} />
                <Title>
                    Insira seus dados para criar uma conta e aproveitar nossos
                    serviços.
                </Title>
                <TextInput
                    name="name"
                    placeholder="Nome"
                    control={control}
                    error={errors.name?.message}
                />
                <TextInput
                    name="email"
                    placeholder="E-mail"
                    control={control}
                    error={errors.email?.message}
                />
                <TextInput
                    name="password"
                    placeholder="Senha"
                    control={control}
                    error={errors.password?.message}
                    keyboardType="default"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                />
                <TextInput
                    name="confirmPassword"
                    placeholder="Confirmar senha"
                    control={control}
                    error={errors.confirmPassword?.message}
                    keyboardType="default"
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                />
                <TextInput
                    name="phone"
                    placeholder="Telefone"
                    control={control}
                    error={errors.phone?.message}
                    keyboardType="numeric"
                    maskValueFormatted
                    maskFormat="(99) 99999-9999"
                />
                <Button
                    type="default"
                    onPress={() => {
                        handleSubmit(onSubmit)();
                    }}>
                    Continuar
                </Button>
            </Content>
        </Container>
    );
};
