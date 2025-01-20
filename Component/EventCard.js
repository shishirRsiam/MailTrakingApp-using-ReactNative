import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Keyboard, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from './Style';


const EventCard = ({ data }) => {
    return (
        <FlatList style={{ marginTop: 52 }}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.eventCard}>
                    <Text style={styles.branch}>Branch: {item.branch}</Text>
                    <Text>Date: <Text style={styles.date}>{item.date}, {item.time}</Text></Text>
                    <Text style={styles.status}>Status: {item.status}</Text>
                    {item.item_type ? <Text style={styles.itemType}>Item Type: {item.item_type}</Text> : null}
                    <Text >Description: <Text style={styles.description}>{item.description}</Text></Text>
                </View>
            )}
        />
    )
}

export default EventCard;