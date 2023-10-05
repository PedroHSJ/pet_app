import {Text} from 'react-native';
import {CardWrapper, Container, Content, PetName, Title} from './styles';
import {useRoute} from '@react-navigation/native';
import {IPet} from '../../interfaces/IPet';
import {useEffect, useState} from 'react';
import {PetsCard} from '../../components/cards/PetCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from 'styled-components/native';
export const Pets = () => {
    const route = useRoute();
    const pets = route.params as IPet[];
    const {colors} = useTheme();
    const [cats, setCat] = useState<IPet[]>([]);
    const [dogs, setDog] = useState<IPet[]>([]);

    useEffect(() => {
        setCat(pets.filter(pet => pet.specie === 'CAT'));
        setDog(pets.filter(pet => pet.specie === 'DOG'));
    }, [route]);

    return (
        <Container>
            <Content>
                <Title>Cães</Title>
                <CardWrapper>
                    {dogs.map((pet, index) => (
                        <PetsCard
                            key={pet.id}
                            first={index === 0}
                            last={index === dogs.length - 1}>
                            <Icon name="paw" size={20} color={colors.primary} />
                            <PetName>{pet.name.toUpperCase()}</PetName>
                        </PetsCard>
                    ))}
                </CardWrapper>
                <Title>Gatos</Title>
                <CardWrapper>
                    {cats.map(
                        (pet, index) => (
                            console.log(pets.length),
                            console.log(index),
                            (
                                <PetsCard
                                    key={pet.id}
                                    first={index === 0}
                                    last={index === cats.length - 1}>
                                    <IconFA
                                        name="cat"
                                        size={20}
                                        color={colors.primary}
                                    />
                                    <PetName>{pet.name.toUpperCase()}</PetName>
                                </PetsCard>
                            )
                        ),
                    )}
                </CardWrapper>
            </Content>
        </Container>
    );
};
