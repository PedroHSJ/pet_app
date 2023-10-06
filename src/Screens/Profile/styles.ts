import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    /* padding: 0 16px; */
`;
export const Content = styled.View`
    flex: 1;
    /* padding: 20px; */
    display: flex;
    flex-direction: column;
`;

export const LogoutButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 5px;
    width: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

export const LogoutButtonText = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.small};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.red};
`;

export const WrapperProfileRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    /* justify-content: space-between; */
`;

export const WrapperProfileColumn = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;
`;

export const ProfileName = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.small};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.black};
    margin: 10px 5px;
    max-width: 200px;
`;

export const ProfileNameBold = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.small};
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.black};
    margin: 10px 5px;
    max-width: 200px;
`;

export const ProfileEmail = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.xsmall};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.regular};
`;

export const WrapperEmail = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const WrapperPhone = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const ProfilePhone = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.xsmall};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.regular};
`;

export const CardWrapper = styled.View`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

export const InfoWrapper = styled.View`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.lightGray};
    padding: 10px;
    border-radius: 8px;
`;

export const ProfileCardText = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.xsmall};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.black};
`;

export const CreatedAtText = styled.Text`
    font-size: ${({theme}) => theme.fonts.size.xsmall};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.regular};
    margin: 0 5px;
`;
