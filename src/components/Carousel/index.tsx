import Carousel from 'react-native-reanimated-carousel';
import {Container} from './styles';
import {View} from 'react-native';
import React, {Children} from 'react';

interface ArrayData {
    image: any;
}

interface CarouselProps {
    width: number;
    renderItems: () => JSX.Element;
    data: ArrayData[];
}

export const CarouselComponent = ({
    width,
    renderItems,
    data,
}: CarouselProps) => {
    return (
        <Container>
            <Carousel
                loop
                width={width}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                renderItem={renderItems}
            />
        </Container>
    );
};
