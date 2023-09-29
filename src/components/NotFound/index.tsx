import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, TextNotFound} from './styles';

interface NotFoundProps {
    text?: string;
}

export function NotFound({text}: NotFoundProps): JSX.Element {
    return (
        <Container>
            <MCIcon name="cloud-search" size={70} color="#999" />
            <TextNotFound>{text}</TextNotFound>
        </Container>
    );
}

NotFound.defaultProps = {
    text: 'Nenhum dado encontrado',
};
