import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, SafeAreaView, Image } from 'react-native';
import { API_KEY, BASE_URL } from '../utils';



const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };





  const SECTIONS = [
    {
      title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://picsum.photos/id/1/200',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://picsum.photos/id/10/200',
        },
  
        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://picsum.photos/id/1002/200',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://picsum.photos/id/1006/200',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://picsum.photos/id/1008/200',
        },
      ],
    },
    {
      title: 'Punk and hardcore',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://picsum.photos/id/1011/200',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://picsum.photos/id/1012/200',
        },
  
        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://picsum.photos/id/1013/200',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://picsum.photos/id/1015/200',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://picsum.photos/id/1016/200',
        },
      ],
    }
  ];



  export default function ExampleScreen() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>
      </View>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    sectionHeader: {
      fontWeight: '800',
      fontSize: 18,
      color: '#f4f4f4',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
    text: {
      color:'black'
    }
  });













/* 
function ExampleScreen () {



    return (
        <View style = {styles.container}>
            <Text style={styles.text}>Exemplo...</Text>
        </View>
    )
};



export default ExampleScreen; */