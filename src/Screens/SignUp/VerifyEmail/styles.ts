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
    font-size: ${({theme}) => theme.fonts.size.large};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 8px;
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.small};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.lightBlack};
    margin: 5px 0;
    max-width: 360px;
    text-align: center;
`;

export const ContainerResendEmail = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 353px;
    justify-content: flex-start;
    margin: -5px 0 0 0;
    padding: 10px;
`;

export const Image = styled.Image`
    height: 248px;
`;
