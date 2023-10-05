import {Appearance} from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
    backColor?: string;
    colorScheme?: string;
}
//MANTENDO A MESMA COR NO DARK MODE
const colorScheme = Appearance.getColorScheme();

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) =>
        colorScheme === 'dark'
            ? theme.colors.background
            : theme.colors.background};
    align-items: center;
    justify-content: center;
`;
