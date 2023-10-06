import styled from 'styled-components/native';
import {MaskedTextInput} from 'react-native-mask-text';
import {BorderlessButton} from 'react-native-gesture-handler';

export const FullContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    width: 100%;
    max-width: 353px;
    align-self: center;
`;

export const Container = styled.TouchableHighlight`
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 353px;
    height: 45px;
    background-color: ${({theme}) => theme.colors.gray};
    border-radius: 10px;
    padding: 0 10px;
    margin: 8px 0;
    justify-content: space-between;
`;

export const InputMask = styled(MaskedTextInput)``;

export const Input = styled.TextInput`
    color: ${({theme}) => theme.colors.black};
`;

export const TextError = styled.Text`
    color: ${({theme}) => theme.colors.error};
    margin: 5px 0;
`;

export const RightIconButton = styled(BorderlessButton)``;
