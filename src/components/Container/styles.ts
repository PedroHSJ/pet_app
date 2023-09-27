import styled from 'styled-components/native';

interface ContainerProps {
    backColor?: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    align-items: center;
    justify-content: center;
`;
