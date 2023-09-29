import {useForm} from 'react-hook-form';
import {BackgroundImage, Image} from '../../Login/styles';
import {Container, Content, Title} from './styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
export const Step2 = () => {
    const navigation = useNavigation();
    const {
        control,
        formState: {errors},
    } = useForm();
    const handleClick = () => {
        navigation.navigate('');
    };
    return (
        <Container>
            <BackgroundImage source={ImageBack} />
            <Content>
                <Image source={Logo} />
                <Title>
                    Insira seus dados de endereço para criar uma conta e
                    aproveitar nossos serviços.
                </Title>
                <TextInput
                    name="address.city"
                    placeholder="Cidade"
                    control={control}
                    error={errors.address?.city?.message}
                />
                <TextInput
                    name="address.neighborhood"
                    placeholder="Bairro"
                    control={control}
                    error={errors.address?.neighborhood?.message}
                />
                <TextInput
                    name="address.street"
                    placeholder="Rua"
                    control={control}
                    error={errors.address?.street?.message}
                />
                <TextInput
                    name="address.number"
                    placeholder="Número"
                    control={control}
                    error={errors.address?.number?.message}
                />

                <TextInput
                    name="address.postalCode"
                    placeholder="CEP"
                    control={control}
                    error={errors.address?.postalCode?.message}
                />
                <TextInput
                    name="address.state"
                    placeholder="Estado"
                    control={control}
                    error={errors.address?.state?.message}
                />
                <TextInput
                    name="address.complement"
                    placeholder="Complemento"
                    control={control}
                    error={errors.address?.complement?.message}
                />

                <Button type="default" onPress={handleClick}>
                    Continuar
                </Button>
            </Content>
        </Container>
    );
};
