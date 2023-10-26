import {
    Container,
    Title,
    ContainerTitle,
    PetsScroll,
    PetImage,
    PetItem,
    ContainerStatus,
    Status,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Img from '../../../assets/images/dog_1.png';

const HomePetStatus = () => {
    return (
        <Container>
            <ContainerTitle>
                <Icon name="emoticon-outline" size={30} />
                <Title>{`Situação do(s) pet(s)`}</Title>
            </ContainerTitle>
            <PetsScroll showsVerticalScrollIndicator={false}>
                <PetItem>
                    <PetImage source={Img} />
                    <ContainerStatus>
                        <Status>Saudável</Status>
                        <Status>Saudável</Status>
                        <Status>Saudável</Status>
                    </ContainerStatus>
                </PetItem>
                <PetItem>
                    <PetImage source={Img} />
                    <ContainerStatus>
                        <Status>Saudável</Status>
                        <Status>Saudável</Status>
                        <Status>Saudável</Status>
                    </ContainerStatus>
                </PetItem>
                <PetItem>
                    <PetImage source={Img} />
                    <ContainerStatus>
                        <Status>Saldável</Status>
                        <Status>Saldável</Status>
                        <Status>Saldável</Status>
                    </ContainerStatus>
                </PetItem>
            </PetsScroll>
        </Container>
    );
};

export default HomePetStatus;
