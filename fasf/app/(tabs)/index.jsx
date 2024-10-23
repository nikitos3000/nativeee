import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet } from 'react-native';

const App = () => {

  const langs = [
    {
      id: '1',
      name: 'JavaScript',
      logo: '../../assets/images/js.jpg', 
    },
    {
      id: '2',
      name: 'HTML',
      logo: '../../assets/images/html.jpg', 
    },
    {
      id: '3',
      name: 'CSS',
      logo: '../../assets/images/css.jpg', 
    },
  ];

  return (
    <SafeAreaView style={styles.appContainer}>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.langName}>{item.name}</Text>
              <Text style={styles.experience}>4 года</Text> 
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  langName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    color: '#777',
  },
});

export default App;
