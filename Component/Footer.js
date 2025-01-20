import React from 'react';
import DeveloperInfo from './DeveloperInfo';
import { Text } from 'react-native';

const Footer = () => {
    return (
        <>
            <Text style={{ textAlign: 'center' }}>Powered by <Text style={{ fontWeight: 'bold' }}>Bangladesh Post Office</Text></Text>
            < DeveloperInfo />
        </>
    )
}

export default Footer;