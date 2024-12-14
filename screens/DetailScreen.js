// screens/DetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { painting } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{painting.title}</Text>
      <Image source={painting.image} style={styles.image} />
      <Text style={styles.description}>
        "Starry Night" adalah salah satu lukisan terkenal karya Vincent van Gogh yang menggambarkan pemandangan malam hari dengan langit penuh bintang. Lukisan ini menciptakan suasana yang dinamis dan bergetar dengan penggunaan warna biru yang intens dan bentuk yang melengkung. Van Gogh melukisnya saat dia tinggal di rumah sakit jiwa Saint-Paul-de-Mausole, dan lukisan ini dianggap mencerminkan perasaan dan pengalamannya yang penuh emosi saat itu.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
  },
});

export default DetailScreen;
