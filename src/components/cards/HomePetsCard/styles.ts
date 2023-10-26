import styled from 'styled-components/native';

export const Container = styled.View`
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
    contentContainerStyle: {
        flexGrow: 1,
        rowGap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboardShouldPersistTaps: 'handled',
})``;

export const PetImage = styled.Image`
    width: 130px;
    height: 130px;
    object-fit: contain;
    border-radius: 20px;
`;

export const PetItem = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 12px;
`;

export const PetName = styled.Text``;
