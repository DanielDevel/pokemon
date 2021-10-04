import React from 'react';
import {StyleSheet, FlatList, ImageBackground, View} from 'react-native';
import {useSelector} from 'react-redux';
import CardPost from '../constants/CardPost';
const ScreenFavorite = ({navigation}) => {
  const states = useSelector(state => state);
  const ShowCardPostFavorite = itemsData => {
    return (
      <CardPost
        onPress={() => {
          navigation.navigate('PokoDetail', {
            name: itemsData.item.name,
          });
        }}
        name={itemsData.item.name}
      />
    );
  };
  return (
    <View style={styles.cViewMain}>
      <ImageBackground
        style={styles.cImage}
        resizeMode="contain"
        source={require('./../assets/Images/bg-login.jpg')}>
        <View style={styles.cViewMiddle}>
          <FlatList
            numColumns="2"
            data={states.favList}
            keyExtractor={(item, index) => index}
            renderItem={ShowCardPostFavorite}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ScreenFavorite;

const styles = StyleSheet.create({
  cViewMain: {
    flex: 1,
  },
  cImage: {
    flex: 1,
  },
  cViewMiddle: {
    height: '100%',
  },
});
