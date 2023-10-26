import HomePetsCard from '../../components/cards/HomePetsCard';
import HomePetStatus from '../../components/cards/HomePetsStatus';
import {Container, ContentCards} from './styles';

const Home = () => {
    const mockPets = [
        {id: '1', name: 'Robson'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Hulk'},
        {id: '4', name: 'Xuxu'},
        {id: '5', name: 'Whisty'},
    ];

    return (
        <Container>
            <HomePetsCard pets={mockPets} />
            <ContentCards>
                <HomePetStatus />
                <HomePetStatus />
            </ContentCards>
        </Container>
    );
};

export default Home;
