import {Container} from '../styles';

interface IPetsCard {
    children: React.ReactNode;
    first?: boolean;
    last?: boolean;
    onPress?: () => void;
}

export const PetsCard = ({children, first, last, onPress}: IPetsCard) => {
    return (
        <Container first={first} last={last} onPress={onPress}>
            {children}
        </Container>
    );
};
