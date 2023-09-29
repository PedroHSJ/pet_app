import styled from 'styled-components/native';

export const Container = styled.View`
    align-self: center;
    width: 100%;
    align-items: center;
`;

export const TextNotFound = styled.Text`
    color: ${({theme}) => theme.colors.regular};
    font-size: 18px;
`;
