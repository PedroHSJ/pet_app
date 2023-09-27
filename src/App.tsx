/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

import {AuthProvider} from './hooks/useAuth';
import {TextInput} from './components/form/Input';
import {ThemeProvider} from 'styled-components/native';
import theme from './styles/theme';
import {useForm} from 'react-hook-form';
import {Button} from './components/Button';
import {Routes} from './routes';
import {Root} from './style';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function App(): JSX.Element {
    const {control} = useForm();

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
