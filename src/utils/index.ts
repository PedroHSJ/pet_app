import {AxiosError} from 'axios';

export function handleErrorMessage(error: any) {
    if (!error) return '';
    if (error instanceof AxiosError)
        return error.response?.data?.message.message;
}

export const formatPhone = (phone: string | undefined) => {
    const ddd = phone?.slice(0, 2);
    const part1 = phone?.slice(2, 7);
    const part2 = phone?.slice(7, 11);
    return `(${ddd}) ${part1}-${part2}`;
};

export const firstAndSecondName = (name: string | undefined) => {
    const firstName = name?.split(' ')[0];
    //verificando se o segundo nome tem 'de' ou 'da' para não exibir e exibir o ultimo nome
    const secondName =
        name?.split(' ')[1].includes('De') || name?.split(' ')[1].includes('Da')
            ? name?.split(' ')[-1]
            : null;

    return `${firstName} ${secondName ? secondName : ''}`;
};

export const formatDate = (date: Date) => {
    if (!date) return '';

    // const month = date.getMonth() + 1;
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return date.toLocaleString('pt-BR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
};
