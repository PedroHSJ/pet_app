import styled from 'styled-components/native';

interface IContainerView {
    isFocused: boolean;
}

export const Container = styled.View`
    margin: 8px 0;
    width: 100%;
    max-width: 353px;
`;

export const ContainerText = styled.View<IContainerView>`
    width: 60px;
    height: 60px;
    justify-content: 'center';
    align-items: 'center';
    border-bottom-color: ${({theme}) => theme.colors.black};
    border-bottom-width: 1px;

    ${({isFocused, theme}) =>
        isFocused &&
        `
        border-bottom-color: ${theme.colors.secondary};
        border-bottom-width: 2px;
    `}
    width:45px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;

export const TextCell = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.medium};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.black};
`;

export const TextError = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.xsmall};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.error};
    margin-top: 5px;
    text-align: left;
`;
