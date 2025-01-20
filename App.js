import API from './API';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import InputBox from './Component/InputBox';
import { View, Keyboard } from 'react-native';
import DataLoader from './Component/DataLoader';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItemId, setSearchItemId] = useState('');
  const [itemId, setItemId] = useState('');

  const fetchData = async () => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      const api = `${API.GET_EVENTS}?item_id=${itemId}`;
      const response = await fetch(`${api}`);
      const result = await response.json();

      setData(result.events || []);
      setSearchItemId(result.item_id);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar />

      <InputBox fetchData={fetchData} itemId={itemId} setItemId={setItemId} />

      <DataLoader loading={loading} searchItemId={searchItemId} data={data} />

      <Footer />
    </View>
  );
};

export default App;