import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import {
    Container,
    ContainerFooter,
    Input,
    InputMask,
    RightIconButton,
    TextError,
} from './styles';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
    TextInputProps as TextInputRNProps,
    TextInput as TextInputRN,
    ActivityIndicator,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components/native';
import {mask} from 'react-native-mask-text';

interface InputProps extends TextInputRNProps {
    name: string;
    control?: Control<FieldValue<FieldValues>>;
    placeholder: string;
    error?: string;
    type?: string;
    maskValueFormatted?: boolean;
    maskFormat?: string;
    editable?: boolean;
    rightIconName?: string;
    onClickRightIcon?: () => void;
    loading?: boolean;
}

export const TextInput = ({
    name,
    control,
    placeholder,
    error,
    maskValueFormatted,
    maskFormat,
    editable,
    type,
    rightIconName,
    onClickRightIcon,
    loading,
    ...rest
}: InputProps) => {
    const {colors} = useTheme();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const form = useForm();
    const {
        field,
        fieldState: {error: fieldError},
    } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const inputRef = useRef<TextInputRN>(null);

    const handleChangeValue = useCallback(
        (value: string) => {
            field.onChange(value);
        },
        [field],
    );

    // useEffect(() => {
    //     if (!field.value) return;
    //     console.log('field.value', field.value);
    //     handleChangeValue(
    //         maskValueFormatted ? mask(field.value, maskFormat) : field.value,
    //     );
    // }, [field]);

    useEffect;

    return (
        <>
            <Container
                activeOpacity={1}
                underlayColor={colors.gray}
                onPress={() => inputRef.current?.focus()}>
                {maskFormat ? (
                    <>
                        <InputMask
                            placeholder={placeholder}
                            onChangeText={(maskedText, rawText) =>
                                handleChangeValue(
                                    maskValueFormatted
                                        ? maskedText
                                        : String(rawText),
                                )
                            }
                            value={field.value}
                            editable={editable}
                            mask={maskFormat}
                            ref={inputRef}
                            {...rest}
                        />
                        {loading && <ActivityIndicator color="#000" />}
                    </>
                ) : (
                    <>
                        <Input
                            placeholder={placeholder}
                            onChangeText={handleChangeValue}
                            value={field.value}
                            secureTextEntry={
                                type == 'password' && !isPasswordVisible
                                    ? true
                                    : false
                            }
                            editable={editable}
                            ref={inputRef}
                            {...rest}
                        />
                        {type == 'password' && (
                            <MCIcon
                                name={!isPasswordVisible ? 'eye-off' : 'eye'}
                                size={24}
                                onPress={() =>
                                    setIsPasswordVisible(!isPasswordVisible)
                                }
                            />
                        )}
                    </>
                )}
            </Container>
            {error && <TextError>{error}</TextError>}
        </>
    );
};

TextInput.defaultProps = {
    error: undefined,
    labelInLine: false,
    leftIconName: undefined,
    onClickLeftIcon: undefined,
    maskFormat: undefined,
    maskValueFormatted: false,
    editable: true,
    control: undefined,
};
