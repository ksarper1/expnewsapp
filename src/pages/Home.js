import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import news_data from '../../news_data.json';
import NewsCard from "../components/NewsCard";
import news_banner_data from '../../news_banner_data.json';
import styles from '../components/NewsCard/NewsCard.style'
export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.app_container}>
        <View>
          <Text style={styles.srpr}>News</Text>
          <FlatList
            ListHeaderComponent={() =>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  news_banner_data.map(bannerNews => (<Image
                    style={styles.banner_image}
                    source={{ uri: bannerNews.imageUrl }}
                  />
                  ))}
              </ScrollView>}
            keyExtractor={item => item.u_id.toString()}
            data={news_data}
            renderItem={({ item }) => <NewsCard news={item} />}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default Home