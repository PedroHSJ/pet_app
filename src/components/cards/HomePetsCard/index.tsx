import {
    Container,
    Title,
    ContainerTitle,
    PetsScroll,
    PetImage,
    PetItem,
    PetName,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/images/dog_2.png';

interface IHomePetsCardProps {
    pets: any[];
}

const HomePetsCard = ({pets}: IHomePetsCardProps) => {
    return (
        <Container>
            <ContainerTitle>
                <Icon name="pets" size={30} />
                <Title>Meus Pets</Title>
            </ContainerTitle>
            <PetsScroll horizontal showsHorizontalScrollIndicator={false}>
                {pets.map(pet => {
                    return (
                        <PetItem key={pet.id}>
                            <PetImage source={Logo} />
                            <PetName>{pet.name}</PetName>
                        </PetItem>
                    );
                })}
            </PetsScroll>
        </Container>
    );
};

export default HomePetsCard;
