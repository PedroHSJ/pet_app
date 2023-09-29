import {useForm} from 'react-hook-form';
import {BackgroundImage, Image} from '../../Login/styles';
import {Container, Content, Title} from './styles';
import ImageBack from '../../../assets/images/Login_background_img.png';
import Logo from '../../../assets/images/Logo_primary.png';
import {TextInput} from '../../../components/form/Input';
import {Button} from '../../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IClient} from '../../../interfaces/IClient';
import {useEffect, useState} from 'react';
import {useCep} from '../../../hooks/useCep';
import SelectInput from '../../../components/form/SelectInput';
import {UFs} from '../../../constants/uf';
import {IAddress} from '../../../interfaces/IAddress';
export const Step2 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [clientStep1, setClientStep1] = useState<Partial<IClient>>({});
    const {
        control,
        formState: {errors},
        setValue,
        watch,
    } = useForm<IAddress>();
    const {get, response, success, loading: loadingCEP, error} = useCep();

    const cepInput = watch('address.postalCode');

    useEffect(() => {
        setClientStep1(route.params as IClient);
    }, [route.params]);

    useEffect(() => {
        if (!cepInput) return;
        if (cepInput.length < 8) return;

        get(cepInput.toString());
    }, [cepInput]);

    useEffect(() => {
        if (!response) return;
        setValue('address.city', response.city);
        setValue('address.neighborhood', response.neighborhood);
        setValue('address.street', response.street);
        setValue('address.state', response.state);
    }, [response]);

    const handleClick = () => {
        //navigation.navigate('');
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
                    name="address.postalCode"
                    placeholder="CEP"
                    control={control}
                    error={errors.address?.postalCode?.message}
                    maskValueFormatted
                    maskFormat="99999-999"
                    keyboardType="numeric"
                    loading={loadingCEP}
                />
                <SelectInput
                    design="default"
                    control={control}
                    name="address.state"
                    label="Estado"
                    type="text"
                    data={UFs}
                    error={errors.address?.state?.message}
                    loading={false}
                />
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
