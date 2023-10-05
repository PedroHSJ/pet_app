import {useTheme} from 'styled-components/native';
import {Container, Content, ContentChevron} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface IProfileCard {
    children: React.ReactNode;
    first?: boolean;
    last?: boolean;
    onPress?: () => void;
}

export const ProfileCard = ({children, first, last, onPress}: IProfileCard) => {
    const {colors} = useTheme();

    return (
        <Container first={first} last={last} onPress={onPress}>
            <Content>{children}</Content>
            <ContentChevron>
                <Icon name="chevron-right" size={30} color={colors.regular} />
            </ContentChevron>
        </Container>
    );
};
