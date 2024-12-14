// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const painting = {
    title: 'Starry Night',
    image: require('../assets/starry_night.jpg'),  // Ganti dengan nama file gambar Anda
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{painting.title}</Text>
      <Image source={painting.image} style={styles.image} />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Detail', { painting })}
      >
        <Text style={styles.buttonText}>Tentang Lukisan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
