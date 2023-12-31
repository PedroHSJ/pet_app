import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import {
    Container,
    ContentLeft,
    FullContainer,
    Input,
    InputMask,
    RightIconButton,
    TextError,
} from './styles';
import {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
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
    children?: ReactNode;
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
    children,
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
        <FullContainer>
            <Container
                activeOpacity={1}
                underlayColor={colors.gray}
                onPress={() => inputRef.current?.focus()}>
                <>
                    <ContentLeft>
                        {children}
                        {maskFormat ? (
                            <InputMask
                                placeholder={placeholder}
                                onChangeText={(maskedText, rawText) =>
                                    handleChangeValue(
                                        maskValueFormatted
                                            ? maskedText
                                            : String(rawText),
                                    )
                                }
                                placeholderTextColor={colors.softPlaceholder}
                                value={field.value}
                                editable={editable}
                                mask={maskFormat}
                                ref={inputRef}
                                {...rest}
                            />
                        ) : (
                            <Input
                                placeholder={placeholder}
                                onChangeText={handleChangeValue}
                                value={field.value}
                                secureTextEntry={
                                    type == 'password' && !isPasswordVisible
                                        ? true
                                        : false
                                }
                                placeholderTextColor={colors.softPlaceholder}
                                editable={editable}
                                ref={inputRef}
                                {...rest}
                            />
                        )}
                    </ContentLeft>
                    {loading && <ActivityIndicator color={colors.secondary} />}
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
            </Container>
            {error && <TextError>{error}</TextError>}
        </FullContainer>
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
