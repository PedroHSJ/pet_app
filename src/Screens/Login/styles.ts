import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: transparent;
    align-items: center;
    justify-content: center;
`;

export const BackgroundImage = styled.Image`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    opacity: 0.3;
`;

export const Image = styled.Image`
    height: 248px;
`;

export const ContainerFooter = styled.TouchableOpacity`
    padding: 16px;
    display: flex;
    width: 100%;
    max-width: 353px;
    margin: 0 0 8px 0;
`;

export const TextForgetPassword = styled.Text`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.size.small};
    font-family: ${({theme}) => theme.fonts.regular};
    text-align: right;
`;
