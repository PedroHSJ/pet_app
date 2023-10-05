import {ReactNode} from 'react';
import {ButtonContainer, ButtonContainerDisabled, ButtonText} from './styles';
import {ActivityIndicator, Text} from 'react-native';

interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    type?: 'default' | 'outlined';
    rounded?: boolean;
}

export const Button = ({
    children,
    onPress,
    loading,
    type = 'default',
    disabled,
    rounded,
}: ButtonProps) => {
    return (
        <>
            {disabled && (
                <ButtonContainerDisabled
                    onPress={onPress}
                    rounded={rounded ? rounded : undefined}
                    type={type}>
                    {loading ? (
                        <>
                            <ActivityIndicator color="#fff" />
                        </>
                    ) : (
                        <ButtonText>{children}</ButtonText>
                    )}
                </ButtonContainerDisabled>
            )}
            {!disabled && (
                <ButtonContainer
                    onPress={onPress}
                    rounded={rounded ? rounded : undefined}
                    type={type}>
                    {loading ? (
                        <>
                            <ActivityIndicator color="#fff" />
                        </>
                    ) : (
                        <ButtonText>{children}</ButtonText>
                    )}
                </ButtonContainer>
            )}
        </>
    );
};
