import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.ice};
`;

export const Content = styled.View`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;
export const CardWrapper = styled.View`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

export const PetName = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.small};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.black};
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.black};
`;
