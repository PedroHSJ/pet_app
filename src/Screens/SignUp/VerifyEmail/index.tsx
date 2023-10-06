import {useNavigation, useRoute} from '@react-navigation/native';
import {
    Container,
    ContainerResendEmail,
    Image,
    SubTitle,
    Title,
} from './styles';
import {IClient} from '../../../interfaces/IClient';
import {TextInput} from '../../../components/form/Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {REQUIRED_FIELD} from '../../../constants';
import {Button} from '../../../components/Button';
import {useEffect, useState} from 'react';
import {useEmail} from '../../../hooks/useEmail';
import {ActivityIndicator, Alert} from 'react-native';
import {compare} from 'bcryptjs';
import {useClient} from '../../../hooks/useClient';
import {BackgroundImage} from '../../Login/styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {VerificationCodeInput} from '../../../components/form/VerificationCodeInput';

interface IVerifyEmail {
    code: string;
}

export const VerifyEmail = (): JSX.Element => {
    const route = useRoute();
    const client = route.params as IClient;
    const navigation = useNavigation();

    const {
        control,
        formState: {errors},
        setValue,
        watch,
        handleSubmit,
    } = useForm<IVerifyEmail>({
        resolver: yupResolver(
            yup.object().shape({
                code: yup.string().required(REQUIRED_FIELD),
            }),
        ),
    });
    const {
        error: errorEmail,
        loading: loadingEmail,
        success: successEmail,
        sendEmailVerificationCode,
        verificationCode,
    } = useEmail();
    const [loadingCompare, setLoadingCompare] = useState(false);
    const {error, loading, success, create} = useClient();

    useEffect(() => {
        if (!errorEmail) return;
        console.log(errorEmail);
        Alert.alert('Erro', errorEmail);
    }, [errorEmail]);

    useEffect(() => {
        if (!client) return;
        sendEmailVerificationCode(client.email, client.name);
    }, [client]);

    const onClickResendEmail = async () => {
        if (!client) return;
        await sendEmailVerificationCode(client.email, client.name);
    };

    // const onClickConfirm = async (data: IVerifyEmail) => {
    //     if(!verificationCode) return;
    //     await compare(data.code, verificationCode);
    // };
    useEffect(() => {
        const code = watch('code');
        setLoadingCompare(false);
        if (code.length === 6) {
            (async () => {
                compareCode(code);
            })();
        }
    }, [watch('code')]);

    useEffect(() => {
        if (!success) return;
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('Login');
    }, [success]);

    useEffect(() => {
        if (!error) return;
        Alert.alert('Erro ao realizar cadastro.', error);
    }, [error]);

    const compareCode = async (code: string) => {
        setLoadingCompare(true);
        const codeCompared = await compare(code, verificationCode);
        console.log('codeCompared', codeCompared);
        if (!codeCompared) {
            setLoadingCompare(false);
            Alert.alert('Erro', 'Código inválido');
            return;
        }

        Alert.alert('Sucesso', 'Email verificado com sucesso');
        setLoadingCompare(false);
        await create(client);
    };

    return (
        <>
            {!loading && (
                <Container>
                    <BackgroundImage source={ImageBack} />
                    <Image source={Logo} />
                    <Title>Olá, {client?.name ?? ''}</Title>

                    <SubTitle>
                        Enviamos um email para {client?.email ?? ''} com um
                        código de confirmação
                    </SubTitle>

                    <VerificationCodeInput control={control} name="code" />
                    <ContainerResendEmail onPress={() => onClickResendEmail()}>
                        <SubTitle>Não recebeu o código? </SubTitle>
                        <SubTitle>
                            {!loadingEmail ? (
                                'Reenviar'
                            ) : (
                                <ActivityIndicator size="small" color="#000" />
                            )}
                        </SubTitle>
                    </ContainerResendEmail>
                    <Button
                        loading={loadingCompare}
                        disabled={!loadingCompare}
                        type="default"
                        onPress={() => {}}>
                        Confirmar
                    </Button>
                </Container>
            )}
            {loading && (
                <Container>
                    <ActivityIndicator size="large" color="#000" />
                </Container>
            )}
        </>
    );
};
