import {Image} from 'react-native';
import {Container, BackgroundImage, TextForget} from './styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {useForm} from 'react-hook-form';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
export const ForgetPasswordStep1 = ({navigation}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handleClickSend = () => {
        navigation.navigate('ForgetPasswordStep2');
    };
    return (
        <Container>
            <BackgroundImage source={ImageBack} />
            <Image source={Logo} alt="Logo da empresa" />
            <TextForget>
                Para recuperar sua senha, digite seu e-mail abaixo.
            </TextForget>
            <TextInput
                name="email"
                placeholder="E-mail"
                control={control}
                error={errors.email?.message}
            />
            <Button type="default" onPress={handleSubmit(handleClickSend)()}>
                Enviar
            </Button>
        </Container>
    );
};
