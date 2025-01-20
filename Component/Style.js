import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Keyboard, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';


const styles = StyleSheet.create({
    searchButton: {
      width: '30%',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF6F61',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      marginLeft: 10,
    },
    searchButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    noData: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff', 
      textAlign: 'center', 
      marginTop: 20, 
      backgroundColor: '#FF6F61',
      padding: 15, 
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
    itemId: {
      fontSize: 19,
      fontWeight: 'bold',
      backgroundColor: '#F1F1F1',
      textAlign: 'center',
      position: 'absolute', 
      top: 0,
      zIndex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      padding: 12,
      marginTop: 10,
      marginBottom: 80,
      borderRadius: 8,
      width: 'auto', 
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    
  
    navbar: {
      backgroundColor: '#FF6F61',
      padding: 10,
      paddingTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    logo: {
      width: 50,
      height: 50,
    },
    textContainer: {
      flex: 1,
      marginLeft: 20,
    },
    appName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      letterSpacing: 2,
    },
    appInfo: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: 2,
    },
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#F1F1F1',
      justifyContent: 'center',
    },
    eventCard: {
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 15,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 1,
      borderColor: '#FF6F61',
    },
    branch: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FF6F61',
      marginBottom: 8,
    },
    date: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#555',
      marginBottom: 2,
    },
    description: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#444',
    },
    itemType: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#FF6F61',
      marginBottom: 5,
    },
    status: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#28a745',
      marginBottom: 2,
    },
    type: {
      fontSize: 14,
      color: '#888',
      marginBottom: 5,
    },
  });

export default styles;