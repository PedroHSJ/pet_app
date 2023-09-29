import styled, {css} from 'styled-components/native';
import {IDesignProps} from '../../../interfaces/IDesignProps';

export const ContainerSelectInput = styled.View`
    width: 100%;
    margin: 8px 0;
    justify-content: center;
    align-items: center;
`;

export const ContentSelectInput = styled.View<IDesignProps>`
    width: 100%;
    max-width: 353px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${({design}: IDesignProps) => {
        if (design == 'minimal') {
            return css`
                border-bottom-width: 1px;
                border-bottom-color: ${(props: any) =>
                    props.theme.colors.primary};
            `;
        }
        if (design == 'default') {
            return css`
                border-radius: 11px;
                background-color: ${(props: any) => props.theme.colors.gray};
                padding: 0 15px;
            `;
        }
    }};
`;

export const ContentRow = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonShow = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 13px;
`;

export const Label = styled.Text`
    font-size: ${(props: any) => props.theme.fonts.size.medium};
    color: ${(props: any) => props.theme.colors.lightBlack};
`;

export const Placeholder = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    padding: 15px 0;
`;

export const TextPlaceholder = styled.Text`
    font-size: ${(props: any) => props.theme.fonts.size.medium};
    color: ${(props: any) => props.theme.colors.primary};
`;

export const Value = styled.Text`
    //padding: 15px 4px 15px 0;
    font-size: ${(props: any) => props.theme.fonts.size.medium};
    color: ${(props: any) => props.theme.colors.lightBlack};
`;

export const ButtonResetValue = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Modal = styled.Modal``;

export const ContainerModal = styled.View`
    position: absolute;
    width: 92%;
    align-self: center;
    max-height: 550px;
    min-height: 550px;
    top: 107px;
    border-radius: 10px;
    z-index: 99;
    background-color: ${(props: any) => props.theme.colors.white};
`;

export const FlatList = styled.FlatList``;

export const BtnCloseModal = styled.TouchableHighlight`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${(props: any) => props.theme.colors.darkTransparent};
`;

export const InputFilter = styled.TextInput`
    font-size: ${(props: any) => props.theme.fonts.size.medium};
    padding: 15px;
    background-color: ${(props: any) => props.theme.colors.gray};
    margin: 5px 15px;
    border-radius: 10px;
`;

export const TextError = styled.Text`
    width: 88%;
    margin-top: 10px;
    font-size: ${(props: any) => props.theme.fonts.size.small};
    font-weight: bold;
    color: ${(props: any) => props.theme.colors.error};
    text-align: justify;
`;

export const Title = styled.Text`
    font-size: ${(props: any) => props.theme.fonts.size.large};
    color: ${(props: any) => props.theme.colors.secondary};
    padding: 20px;
    width: 100%;
    text-align: center;
`;
