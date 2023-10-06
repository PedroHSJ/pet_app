import styled from 'styled-components/native';

interface ContainerProps {
    first?: boolean;
    last?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background-color: ${({theme}) => theme.colors.lightGray};
    align-items: center;
    justify-content: space-between;

    ${({first, theme}) =>
        first &&
        `border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom-width: 1px; border-bottom-color: ${theme.colors.gray};`}
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.gray};

    ${({last, theme}) =>
        last &&
        `border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;`}

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    height: 40px;

    padding: 5px 15px;
`;

export const Content = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const ContentChevron = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
`;
