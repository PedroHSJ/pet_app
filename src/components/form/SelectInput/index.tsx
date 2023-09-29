import React, {useState, useCallback, useEffect} from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {Control, FieldValue, FieldValues, useController} from 'react-hook-form';
import {
    ContainerSelectInput,
    ContentSelectInput,
    ContentRow,
    ButtonShow,
    Label,
    Placeholder,
    TextPlaceholder,
    Value,
    Modal,
    ContainerModal,
    FlatList,
    BtnCloseModal,
    InputFilter,
    ButtonResetValue,
    TextError,
    Title,
} from './styles';
import {NotFound} from '../../NotFound';
import {ActivityIndicator} from 'react-native';
import IPicker from '../../../interfaces/IPicker';
import Item from './components';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface ISelectInputProps {
    onPress?: () => void;
    data?: IPicker[];
    label?: string;
    requiredLabel?: boolean;
    design: 'default' | 'minimal';
    loading?: boolean;
    type: 'text' | 'date' | 'time' | any;
    error?: string;
    name: string;
    control: Control<FieldValue<FieldValues>>;
    editable?: boolean;
}

const SelectInput = ({
    onPress,
    data,
    label,
    requiredLabel,
    design,
    loading,
    type,
    error,
    name,
    control,
    editable,
}: ISelectInputProps): JSX.Element => {
    const {field} = useController({name, control});
    const {colors} = useTheme();

    const [showText, setShowText] = useState(false);
    const [showDateTime, setShowDateTime] = useState(false);

    const [selectText, setSelectText] = useState('');
    const [selectDateTime, setSelectDateTime] = useState<Date>(new Date());
    const [formatDateTime, setFormatDateTime] = useState('');

    const [search, setSearch] = useState('');
    const filterData =
        data !== undefined && search.length > 0
            ? data.filter(value =>
                  value.label.toUpperCase().includes(search.toUpperCase()),
              )
            : [];

    // selecionar opção para texto
    const handlePressText = useCallback((item: IPicker) => {
        onPress && onPress();
        setShowText(false);
        field.onChange(item.key);
        return item.key?.toString;
    }, []);

    // Selecionar opção para data
    const handlePressDateTime = useCallback(
        (event: Event, selectedDateTime: Date | undefined) => {
            setShowDateTime(false);
            if (!selectedDateTime) return undefined;
            setSelectDateTime(selectedDateTime);

            // Formatar data para exibição
            if (type == 'date')
                setFormatDateTime(
                    moment(selectedDateTime).format('DD/MM/YYYY'),
                );

            // Formatar tempo para exibição
            if (type == 'time')
                setFormatDateTime(moment(selectedDateTime).format('HH:mm'));

            field.onChange(selectedDateTime);
            return selectedDateTime;
        },
        [],
    );

    const handleReset = () => {
        setSelectText(null);
        setSelectDateTime(new Date());
        field.onChange(undefined);
        return undefined;
    };

    const handleShowDateTime = () => {
        setShowDateTime(!showDateTime);
    };

    // Exibir modal de seleção
    const handleVisibleType = () => {
        type == 'text' && setShowText(true);
        type == 'date' && handleShowDateTime();
        type == 'time' && handleShowDateTime();
    };

    useEffect(() => {
        if (!data) return;
        data.map(picker => {
            if (picker.key == field.value) setSelectText(picker.label);
        });
    }, [field]);

    return (
        <ContainerSelectInput>
            <ContentSelectInput design={design}>
                {label && !selectText && (
                    <Label>
                        {label}{' '}
                        {requiredLabel && (
                            <MCIcon
                                name="asterisk"
                                size={13}
                                color={colors.error}
                            />
                        )}
                    </Label>
                )}
                <ContentRow>
                    {field.value == '' || field.value == undefined || (
                        <ButtonResetValue
                            onPress={handleReset}
                            disabled={editable == false}>
                            <Value numberOfLines={1}>
                                {selectText == '' ? formatDateTime : selectText}
                            </Value>
                            <MCIcon
                                name="close-circle"
                                size={24}
                                color={colors.black}
                            />
                        </ButtonResetValue>
                    )}
                    <ButtonShow
                        disabled={loading || editable == false}
                        onPress={handleVisibleType}>
                        {loading ? (
                            <ActivityIndicator
                                size="small"
                                color={colors.primary}
                            />
                        ) : (
                            <MCIcon
                                name={
                                    type == 'text'
                                        ? 'arrow-down-drop-circle-outline'
                                        : type == 'date'
                                        ? 'calendar'
                                        : 'clock'
                                }
                                size={24}
                                color={colors.primary}
                            />
                        )}
                    </ButtonShow>
                </ContentRow>
            </ContentSelectInput>
            {error && <TextError>{error}</TextError>}

            {/* Modal para selecionar opções de texto */}
            <Modal visible={showText} animationType="fade" transparent>
                <BtnCloseModal
                    activeOpacity={1}
                    underlayColor={colors.black}
                    onPress={() => setShowText(false)}>
                    <ContainerModal>
                        <Title>{label}</Title>
                        <InputFilter
                            placeholder="Filtrar..."
                            onChangeText={(e: string) => setSearch(e)}
                            value={search}
                        />
                        <FlatList
                            data={search.length > 0 ? filterData : data}
                            renderItem={({item}: any) => (
                                <Item
                                    onPress={() => handlePressText(item)}
                                    value={item}
                                />
                            )}
                            ListEmptyComponent={
                                <NotFound text="Nenhuma opção encontrada." />
                            }
                            keyExtractor={() => String(Math.random())}
                            showsVerticalScrollIndicator={false}
                        />
                    </ContainerModal>
                </BtnCloseModal>
            </Modal>

            {
                // Modal para selecionar data e hora
                showDateTime && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        display="default"
                        mode={type}
                        value={selectDateTime}
                        onChange={handlePressDateTime}
                    />
                )
            }
        </ContainerSelectInput>
    );
};

export default SelectInput;
