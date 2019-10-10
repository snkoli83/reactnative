import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'friend 1', age: 'Age 20'},
    {name: 'friend 2', age: 'Age 21'},
    {name: 'friend 3', age: 'Age 22'},
    {name: 'friend 4', age: 'Age 23'},
    {name: 'friend 5', age: 'Age 24'},
    {name: 'friend 6', age: 'Age 25'},
    {name: 'friend 7', age: 'Age 26'},
    {name: 'friend 8', age: 'Age 27'},
    {name: 'friend 9', age: 'Age 28'}

  ];
  return (
    <FlatList
      keyExtractor={friends => friends.name}
      data={friends} 
      renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>;
      }} 
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    marginLeft:10,
    fontSize: 30
  }
});

export default ListScreen;