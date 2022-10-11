import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Container,
    Input,
    StackDivider,
    Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
    return ( <
        ChakraProvider theme = { theme } >
        <
        Container >
        <
        Box borderWidth = "2px"
        borderRadius = "lg"
        p = { 4 }
        mt = { 3 } >
        <
        Text fontSize = "2xl"
        align = "center" > Crear Contacto < /Text> <
        Text fontSize = "md"
        align = "center"
        pb = { 4 } > Ministerio de Empleo < /Text> <
        VStack spacing = { 4 }
        aline = "stretch"
        pb = { 3 } >
        <
        Input placeholder = "Username" / >
        <
        Input placeholder = "Email" / >
        <
        Input placeholder = "Passwoard" / >
        <
        Input placeholder = "Confirm Passwoard" / >
        <
        /VStack> <
        Button colorScheme = "teal"
        variant = "solid"
        isFullWidth = "true" > Loging < /Button> <
        /Box>

        <
        /Container>

        <
        /ChakraProvider>
    );
}

export default App;