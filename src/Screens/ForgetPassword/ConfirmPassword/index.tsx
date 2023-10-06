import {Container, TextBlack} from '../styles';
import Image3 from '../../../assets/images/Image3.png';
import {TextInput} from '../../../components/form/Input';
import {useForm} from 'react-hook-form';
import {Button} from '../../../components/Button';
import {Alert, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {IForgetPasswordStep2} from '../../../routes/guest.routes';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {IConfirmPassword} from '../../../interfaces/IConfirmPassword';
import {ConfirmPasswordSchema} from '../../../validations/ConfirmPassword.schema';
import {useClient} from '../../../hooks/useClient';
import {useEffect, useState} from 'react';

export const ConfirmPassword = ({navigation}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IConfirmPassword>({
        resolver: yupResolver(ConfirmPasswordSchema),
    });
    const route = useRoute();
    const dataRoute = route.params as IForgetPasswordStep2;
    const {error, loading, updatePassword, success} = useClient();
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const verifyPassword = (password: string, confirmPassword: string) => {
        return password === confirmPassword;
    };

    const handleClick = (data: IConfirmPassword) => {
        if (!verifyPassword(data.password, data.confirmPassword)) {
            Alert.alert('As senhas não coincidem');
            return;
        }
        console.log(dataRoute);
        updatePassword(
            data.password,
            dataRoute.email,
            dataRoute.verificationCode,
        );
    };

    useEffect(() => {
        if (!error) return;
        Alert.alert('Erro ao atualizar senha', error);
    }, [error]);

    useEffect(() => {
        if (!success) return;
        Alert.alert('Senha atualizada com sucesso');
        navigation.navigate('Login');
    }, [success]);

    useEffect(() => {
        if (!dataRoute) return;
        setEmail(dataRoute.email);
        setVerificationCode(dataRoute.verificationCode);
    }, [dataRoute]);

    return (
        <Container>
            <Image source={Image3} />
            <TextBlack>Digite sua nova senha abaixo.</TextBlack>
            <TextInput
                name="password"
                placeholder="Senha"
                control={control}
                error={errors.password?.message}
                type="password"
            />
            <TextInput
                name="confirmPassword"
                placeholder="Confirme sua senha"
                control={control}
                error={errors.confirmPassword?.message}
                type="password"
            />
            <Button type="default" onPress={() => handleSubmit(handleClick)()}>
                Enviar
            </Button>
        </Container>
    );
};
