import styled from 'styled-components/native';

export const Image = styled.Image`
    height: 248px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fonts.size.xxxlarge};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Subtitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.regular};
    text-align: center;
    margin-bottom: 16px;
`;

export const TextFooter = styled.Text`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.regular};
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const TextFooterLink = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.regular};

    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
`;
