import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import {
    Container,
    Input,
    InputMask,
    RightIconButton,
    TextError,
} from './styles';
import {useCallback, useEffect, useRef} from 'react';
import {TextInputProps as TextInputRNProps} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components/native';
import {mask} from 'react-native-mask-text';

interface InputProps extends TextInputRNProps {
    name: string;
    control?: Control<FieldValue<FieldValues>>;
    placeholder: string;
    error?: string;

    maskValueFormatted?: boolean;
    maskFormat?: string;
    editable?: boolean;
    rightIconName?: string;
    onClickRightIcon?: () => void;
}

export const TextInput = ({
    name,
    control,
    placeholder,
    error,
    maskValueFormatted,
    maskFormat,
    editable,
    rightIconName,
    onClickRightIcon,
}: InputProps) => {
    const form = useForm();
    const {
        field,
        fieldState: {error: fieldError},
    } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const inputRef = useRef<any>(null);

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

    return (
        <Container onPress={() => inputRef.current.focus()}>
            {maskFormat ? (
                <InputMask
                    placeholder={placeholder}
                    onChangeText={(maskedText, rawText) =>
                        handleChangeValue(
                            maskValueFormatted ? maskedText : String(rawText),
                        )
                    }
                    value={field.value}
                    editable={editable}
                    mask={maskFormat}
                    ref={inputRef}
                />
            ) : (
                <Input
                    placeholder={placeholder}
                    onChangeText={handleChangeValue}
                    value={field.value}
                    editable={editable}
                    ref={inputRef}
                />
            )}
            {/* {rightIconName && (
                <MCIcon
                    name={rightIconName}
                    size={24}
                    color={theme.colors.black}
                    onPress={onClickRightIcon}
                />
            )} */}

            {error && <TextError>{error}</TextError>}
        </Container>
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
