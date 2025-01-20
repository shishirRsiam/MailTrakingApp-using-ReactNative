import React from 'react';
import styles from './Style'; 
import EventCard from './EventCard'; 
import { View, Text, ActivityIndicator } from 'react-native';

const DataLoader = ({ loading, searchItemId, data}) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#FF6F61" />
      ) : (
        <>
          {searchItemId?.length > 0 && (
            <Text style={styles.itemId}>Item ID: {searchItemId}</Text>
          )}
          {data?.length === 0 && searchItemId?.length > 0 ? (
            <Text style={styles.noData}>No items match your search.</Text>
          ) : (
            <EventCard data={data} />
          )}
        </>
      )}
    </View>
  );
};

export default DataLoader;
