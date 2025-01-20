import React from 'react';
import styles from './Style';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const InputBox = ({fetchData, itemId, setItemId}) => {
    return (
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10, marginTop: 15, }}>Please enter the item ID to track:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput style={{
                    height: 40, borderColor: 'gray', borderWidth: 1,
                    borderRadius: 5, paddingHorizontal: 10, width: 200,
                }} placeholder="Enter 13-digit Item ID"
                    onChangeText={(text) => setItemId(text)} value={itemId} />
                <TouchableOpacity
                    style={[styles.searchButton, { opacity: itemId.length === 13 ? 1 : 0.5 },]}
                    disabled={itemId.length !== 13} onPress={() => fetchData()}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InputBox;