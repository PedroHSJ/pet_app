import styled from 'styled-components/native';
import {MaskedTextInput} from 'react-native-mask-text';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 353px;
    height: 45px;
    background-color: ${({theme}) => theme.colors.gray};
    border-radius: 10px;
    padding: 0 10px;
    margin: 8px 0;
`;

export const InputMask = styled(MaskedTextInput)``;

export const Input = styled.TextInput``;

export const TextError = styled.Text`
    color: ${({theme}) => theme.colors.error};
`;

export const RightIconButton = styled(BorderlessButton)``;
