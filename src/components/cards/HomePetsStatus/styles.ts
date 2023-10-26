import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 15px;
    border-radius: 17px;
    background-color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const ContainerTitle = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const PetsScroll = styled.ScrollView.attrs({
    contentContainerStyle: {},
    keyboardShouldPersistTaps: 'handled',
})``;

export const PetImage = styled.Image`
    width: 65px;
    height: 65px;
    object-fit: contain;
    border-radius: 20px;
`;

export const PetItem = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-top: 12px;
    align-self: flex-start;
`;

export const ContainerStatus = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Status = styled.Text``;
