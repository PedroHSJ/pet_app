import styled from 'styled-components/native';

export const Image = styled.Image`
    height: 45%;
    margin-bottom: -30px;
    object-fit: contain;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fonts.size.xlarge};
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Subtitle = styled.Text`
    color: ${({theme}) => theme.colors.regular};
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

export const ContainerFooter = styled.TouchableOpacity`
    padding: 16px;
`;

export const Content = styled.View`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const CarouselImage = styled.Image`
    height: 100%;
    width: 100%;
`;

export const CarouselWrapper = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const InfoWrapper = styled.View`
    /* //ESCOLHENDO COR E OPACIDADE */
    background-color: ${({theme}) => theme.colors.grayOpacity};

    height: 45%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* bordas superiores foramndo um circulo */
    border-radius: 35px 35px 0 0;
`;
