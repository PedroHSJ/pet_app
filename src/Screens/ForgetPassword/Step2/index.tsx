import {Alert, Image} from 'react-native';
import {Container, BackgroundImage, TextForget, TextEmail} from '../styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {useForm} from 'react-hook-form';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {IForgetPasswordStep1} from '../Step1';
import {compare} from 'bcryptjs';
import {useEmail} from '../../../hooks/useEmail';
import {REQUIRED_FIELD} from '../../../constants';
import Image2 from '../../../assets/images/PET2.png';
export interface IForgetPasswordStep2 {
    verificationCode: string;
}

export const ForgetPasswordStep2 = ({navigation}) => {
    const route = useRoute();
    const {
        control,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm<IForgetPasswordStep2>({
        resolver: yupResolver(
            yup.object().shape({
                verificationCode: yup.string().required(REQUIRED_FIELD),
            }),
        ),
    });
    const {
        error: errorEmail,
        loading: loadingEmail,
        success: successEmail,
        sendEmailVerificationCodeUpdatePassword,
        verificationCode,
    } = useEmail();

    const [dataRoute, setDataRoute] = useState<IForgetPasswordStep1>(
        {} as IForgetPasswordStep1,
    );

    const [loadingCompare, setLoadingCompare] = useState(false);

    useEffect(() => {
        if (!route.params) return;
        setDataRoute(route.params as IForgetPasswordStep1);
    }, [route.params]);

    useEffect(() => {
        const code = watch('verificationCode');
        setLoadingCompare(false);
        if (code.length === 6) {
            (async () => {
                compareCode(code);
            })();
        }
    }, [watch('verificationCode')]);

    useEffect(() => {
        if (!errorEmail) return;
        Alert.alert('Erro', errorEmail);
    }, [errorEmail]);

    const compareCode = async (code: string) => {
        setLoadingCompare(true);
        const codeCompared = await compare(code, verificationCode);
        if (!codeCompared) {
            setLoadingCompare(false);
            Alert.alert('Erro', 'Código inválido');
            return;
        }

        Alert.alert('Sucesso', 'Código verificado com sucesso');
        setLoadingCompare(false);
        navigation.navigate('ForgetPasswordStep3', {...dataRoute, code});
    };

    const handleClickSend = () => {
        if (!dataRoute.email) return;
        sendEmailVerificationCodeUpdatePassword(dataRoute.email);
    };
    return (
        <Container>
            {/* <BackgroundImage source={ImageBack} />
            <Image source={Logo} alt="Logo da empresa" /> */}
            <Image source={Image2} alt="Imagem ilustrativa" />

            <TextForget>
                Enviamos um código de verificação para o e-mail{' '}
                <TextEmail>{dataRoute.email}</TextEmail>
            </TextForget>
            <TextInput
                name="verificationCode"
                placeholder="Código de verificação"
                control={control}
                error={errors.verificationCode?.message}
            />
            <Button
                type="default"
                loading={loadingCompare}
                disabled={loadingCompare}
                onPress={() => handleClickSend()}>
                Reenviar código
            </Button>
        </Container>
    );
};
