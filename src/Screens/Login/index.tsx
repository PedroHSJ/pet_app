import {
    BackgroundImage,
    Container,
    ContainerFooter,
    TextForgetPassword,
    Form,
} from './styles';
import ImageBack from '../../assets/images/Login_background_img.png';
import Logo from '../../assets/images/Logo_primary.png';
import {Image} from './styles';
import {TextInput} from '../../components/form/Input';
import {useController, useForm} from 'react-hook-form';
import {Button} from '../../components/Button';
import {useEffect, useState} from 'react';
import {ILogin} from '../../interfaces/ILogin';
import {FormLoginValidationSchema} from '../../validations/FormLoginValidation.schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAuth} from '../../hooks/useAuth';
import {TextFooter, TextFooterLink} from '../Welcome/styles';
import SelectInput from '../../components/form/SelectInput';
import {Alert} from 'react-native';
import {VerificationCodeInput} from '../../components/form/VerificationCodeInput';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = ({navigation}) => {
    const {signIn, loading, error} = useAuth();
    const {
        control,
        formState: {errors},
        handleSubmit,
        setValue,
    } = useForm<ILogin>({
        resolver: yupResolver(FormLoginValidationSchema),
    });

    useEffect(() => {
        setValue('email', 'joao@gmail.com');
        setValue('password', '123456');
    }, []);

    useEffect(() => {
        if (!error) return;

        Alert.alert('Erro', error);
    }, [error]);

    const onSubmit = async (data: ILogin) => {
        await signIn(data);
    };

    const handleClickForgetPassword = () => {
        navigation.navigate('ForgetPasswordStep1');
    };

    return (
        <Container>
            <BackgroundImage source={ImageBack} />
            <Image source={Logo} alt="Logo da empresa" />

            <Form>
                <TextInput
                    name="email"
                    placeholder="E-mail"
                    control={control}
                    error={errors.email?.message}>
                    <MCIcon name={'email'} size={24} color="#999" />
                </TextInput>
                <TextInput
                    name="password"
                    placeholder="Senha"
                    control={control}
                    error={errors.password?.message}
                    type="password">
                    <MCIcon name={'lock'} size={24} color="#999" />
                </TextInput>
            </Form>
            <ContainerFooter onPress={handleClickForgetPassword}>
                <TextForgetPassword>Esqueceu sua senha?</TextForgetPassword>
            </ContainerFooter>
            <Button
                type="default"
                onPress={() => {
                    handleSubmit(onSubmit)();
                }}
                loading={loading}>
                Entrar
            </Button>
        </Container>
    );
};
