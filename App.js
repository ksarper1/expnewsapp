import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import GlobalNavigator from './src/navigation/GlobalNavigator'
import { NativeBaseProvider } from 'native-base'

export class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <GlobalNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    )
  }
}

export default App

/* import React from "react";
import { SafeAreaView, View, Text, FlatList , StyleSheet, ScrollView, Dimensions, Image} from "react-native";
import news_data from './news_data.json';
import NewsCard from "./components/NewsCard";
import news_banner_data from './news_banner_data.json';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen(){
  const renderNews = ({item}) => <NewsCard news={item} />;
  
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.srpr}>News</Text>
        <FlatList
        ListHeaderComponent={() => 
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            news_banner_data.map(bannerNews => (<Image 
              style={styles.banner_image}
              source={{uri: bannerNews.imageUrl}} 
              />
              ))}
        </ScrollView> }
        keyExtractor={item => item.u_id.toString()}
        data = {news_data}
        renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}

function SecondScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second</Text>
    </View>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1", 
  },
  banner_image:{
    height:Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width * 2/3
  },
  srpr:{
    fontSize:40,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default App; */