import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.transparent};
    align-items: center;
    justify-content: center;
    padding: 0 16px;
`;

export const BackgroundImage = styled.Image`
    flex: 1;

    align-items: center;
    justify-content: center;
    position: absolute;
    opacity: 0.25;
`;

export const Image = styled.Image`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    opacity: 0.3;
`;

export const TextForget = styled.Text`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: right;
`;
