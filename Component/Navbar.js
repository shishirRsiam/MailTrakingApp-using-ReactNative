import React from 'react';
import { View, Text,  Image } from 'react-native';
import styles from './Style';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Image source={require('../assets/favicon.png')} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.appName}>Mail Tracking</Text>
                <Text style={styles.appInfo}>Bangladesh Post Tracking</Text>
            </View>
        </View>
    )
}

export default Navbar;