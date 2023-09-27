import styled from 'styled-components/native';
import {MaskedTextInput} from 'react-native-mask-text';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 353px;
    height: 45px;
    background-color: ${({theme}) => theme.colors.gray};
    border-radius: 10px;
    padding: 0 10px;
    margin-bottom: 16px;
`;

export const Input = styled(MaskedTextInput)``;

export const TextError = styled.Text`
    color: ${({theme}) => theme.colors.error};
`;

export const RightIconButton = styled(BorderlessButton)``;
