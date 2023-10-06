import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 16px;
`;

export const Content = styled.View`
    background-color: transparent;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 8px;
    max-width: 360px;
    text-align: center;
`;
