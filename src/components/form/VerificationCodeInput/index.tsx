import {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {ContainerText, TextCell, TextError, Container} from './styles';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';

interface IVerificationCodeInput {
    name: string;
    control?: Control<FieldValue<FieldValues>>;
    error?: string;
}

export const VerificationCodeInput = ({
    name,
    control,
    error,
}: IVerificationCodeInput) => {
    const CELL_COUNT = 6;
    const [value, setValue] = useState('' as string);
    const form = useForm();
    const {
        field,
        fieldState: {error: fieldError},
    } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = useCallback(
        (value: string) => {
            field.onChange(value);
            setValue(value);
        },
        [field],
    );

    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <Container>
            <CodeField
                ref={ref}
                {...props}
                value={field.value}
                onChangeText={handleChangeValue}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <ContainerText
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        isFocused={isFocused}>
                        <TextCell>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </TextCell>
                    </ContainerText>
                )}
            />
            {error && <TextError>{error}</TextError>}
        </Container>
    );
};
