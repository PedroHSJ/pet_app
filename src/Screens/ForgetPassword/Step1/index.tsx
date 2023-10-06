import {Image} from 'react-native';
import {Container, BackgroundImage, TextBlack} from '../styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {useForm} from 'react-hook-form';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {INVALID_EMAIL, REQUIRED_FIELD} from '../../../constants';
import Image1 from '../../../assets/images/PET1.png';
export interface IForgetPasswordStep1 {
    email: string;
}

export const ForgetPasswordStep1 = ({navigation}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IForgetPasswordStep1>({
        resolver: yupResolver(
            yup.object().shape({
                email: yup
                    .string()
                    .email(INVALID_EMAIL)
                    .required(REQUIRED_FIELD),
            }),
        ),
    });

    const handleClickSend = (data: IForgetPasswordStep1) => {
        navigation.navigate('ForgetPasswordStep2', data);
    };
    return (
        <Container>
            {/* <BackgroundImage source={ImageBack} /> */}
            {/* <Image source={Logo} alt="Logo da empresa" /> */}
            <Image source={Image1} alt="Imagem de pessoa com seu pet" />
            <TextBlack>
                Para recuperar sua senha, digite seu e-mail abaixo.
            </TextBlack>
            <TextInput
                name="email"
                placeholder="E-mail"
                control={control}
                error={errors.email?.message}
            />
            <Button
                type="default"
                onPress={() => handleSubmit(handleClickSend)()}>
                Enviar
            </Button>
        </Container>
    );
};
