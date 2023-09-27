import styled from 'styled-components/native';

interface ButtonContainerProps {
    rounded?: boolean;
    type?: 'default' | 'outlined' | 'secondary';
}

export const ButtonContainer = styled.TouchableHighlight<ButtonContainerProps>`
    width: 100%;
    max-width: 353px;
    height: 45px;
    border-radius: 10px;
    background-color: ${({theme, type}) =>
        type === 'default' ? theme.colors.secondary : 'transparent'};
    justify-content: center;
    align-items: center;
    border-radius: ${({rounded}) => (rounded ? '50px' : '5px')};
`;

export const ButtonText = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.regular};
    letter-spacing: 1px;
`;
