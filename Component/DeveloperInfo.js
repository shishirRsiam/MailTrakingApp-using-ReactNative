import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Linking, View } from 'react-native';

const DeveloperInfo = () => {
  const openLink = () => {
    const url = 'https://github.com/shishirRsiam';
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open URL:', err)
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openLink}>
        <Text style={{ textAlign: 'center' }}>
          Click to{' '}
          <Text style={{ fontWeight: 'bold', color: 'blue' }}>
            Developer Info
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DeveloperInfo;