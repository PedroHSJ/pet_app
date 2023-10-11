import {useForm} from 'react-hook-form';
import {BackgroundImage} from '../../Login/styles';
import {Container, Content, Title, Form} from './styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IClient} from '../../../interfaces/IClient';
import {useCallback, useEffect, useState} from 'react';
import {useCep} from '../../../hooks/useCep';
import SelectInput from '../../../components/form/SelectInput';
import {UFs} from '../../../constants/uf';
import {IAddress} from '../../../interfaces/IAddress';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpStep2Validation} from '../../../validations/SignUpStep2Validation.schema';
import {LogoImage} from '../../../components/LogoImage';
export const Step2 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [clientStep1, setClientStep1] = useState<IClient | null>(null);
    const {
        control,
        formState: {errors},
        setValue,
        watch,
        handleSubmit,
    } = useForm<IAddress>({
        resolver: yupResolver(SignUpStep2Validation),
    });
    const {get, response, success, loading: loadingCEP, error} = useCep();

    const cepInput = watch('postalCode');

    useEffect(() => {
        setClientStep1(route.params as IClient);
    }, [route.params]);

    useEffect(() => {
        console.log('clientStep1', clientStep1);
    }, [clientStep1]);

    useEffect(() => {
        if (!cepInput) return;
        if (cepInput.length < 8) return;
        get(cepInput.toString());
    }, [cepInput]);

    useEffect(() => {
        if (!response) return;
        setValue('city', response.city);
        setValue('neighborhood', response.neighborhood);
        setValue('street', response.street);
        setValue('state', response.state);
    }, [response]);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    // const onSubmit = (data: IAddress) => {
    //     setClientStep1(prev => ({...prev, address: data}));
    //     navigation.navigate('verifyEmail', clientStep1);
    // };

    const onSubmit = useCallback(
        (data: IAddress) => {
            data.postalCode = data.postalCode?.replace('-', '');
            navigation.navigate('verifyEmail', {...clientStep1, address: data});
        },
        [clientStep1],
    );

    return (
        <Container>
            <BackgroundImage source={ImageBack} />
            <Content>
                <LogoImage />
                <Title>
                    Insira seus dados de endereço para criar uma conta e
                    aproveitar nossos serviços.
                </Title>
                <Form>
                    <TextInput
                        name="postalCode"
                        placeholder="CEP"
                        control={control}
                        error={errors.postalCode?.message}
                        maskValueFormatted
                        maskFormat="99999-999"
                        autoComplete="address-line1"
                        keyboardType="numeric"
                        loading={loadingCEP}
                    />
                    <SelectInput
                        design="default"
                        control={control}
                        name="state"
                        label="Estado"
                        type="text"
                        data={UFs}
                        error={errors.state?.message}
                        loading={false}
                    />
                    <TextInput
                        name="city"
                        placeholder="Cidade"
                        control={control}
                        error={errors.city?.message}
                    />
                    <TextInput
                        name="neighborhood"
                        placeholder="Bairro"
                        control={control}
                        error={errors.neighborhood?.message}
                    />
                    <TextInput
                        name="street"
                        placeholder="Rua"
                        control={control}
                        error={errors.street?.message}
                    />
                    <TextInput
                        name="number"
                        placeholder="Número"
                        control={control}
                        error={errors.number?.message}
                        keyboardType="numeric"
                    />

                    <TextInput
                        name="complement"
                        placeholder="Complemento"
                        control={control}
                        error={errors.complement?.message}
                    />

                    <Button
                        type="default"
                        onPress={() => {
                            handleSubmit(onSubmit)();
                        }}>
                        Continuar
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};
