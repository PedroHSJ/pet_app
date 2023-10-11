import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 16px;
    margin-top: 20%;
`;

export const Form = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const Content = styled.ScrollView`
    flex: 1;
    width: 100%;
    padding: 0 16px;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 8px;
    max-width: 360px;
    text-align: center;
    align-self: center;
`;
