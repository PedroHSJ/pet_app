import {BackgroundImage, Container} from './styles';
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

export const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {signIn, loading} = useAuth();
    const {
        control,
        formState: {errors},
        handleSubmit,
        setValue,
    } = useForm<ILogin>({});

    useEffect(() => {
        setValue('email', 'pedro@gmail.com');
        setValue('password', '123456');
    }, []);

    const onSubmit = async (data: ILogin) => {
        await signIn(data);
    };

    return (
        <Container>
            <BackgroundImage source={ImageBack} />
            <Image source={Logo} alt="Logo da empresa" />
            <TextInput
                name="email"
                placeholder="E-mail"
                control={control}
                error={errors.email?.message}
                keyboardType="email-address"
                autoCapitalize={'none'}
                returnKeyType="send"
            />
            <TextInput
                name="password"
                placeholder="Senha"
                control={control}
                error={errors.password?.message}
                keyboardType="default"
                autoCapitalize={'none'}
                // rightIconName={
                //     isPasswordVisible ? 'eye-outline' : 'eye-off-outline'
                // }
                // onClickRightIcon={() =>
                //     setIsPasswordVisible(!isPasswordVisible)
                // }
            />
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
