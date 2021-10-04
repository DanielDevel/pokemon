import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, View, FlatList, Alert} from 'react-native';
import CardPost from '../constants/CardPost';
import SearchBar from './../constants/SearchBar';
import {getFullIdName, getFullPokemonInId} from './../services/ServiceMain';
const ScreenHome = ({navigation}) => {
  const [nameHero, setHero] = useState('');
  const [listAllPokemon, setListAllPokemon] = useState([]);
  const [nextPage, setNextPage] = useState('');
  useEffect(() => {
    getFullIdName('https://pokeapi.co/api/v2/pokemon').then(itemsPok => {
      setListAllPokemon(itemsPok.fullIdName);
      setNextPage(itemsPok.next);
    });
  }, []);
  const searchPokemon = async () => {
    try {
      const resPok = await getFullPokemonInId(nameHero.toLowerCase());
      navigation.navigate('PokoDetail', {
        name: resPok.name,
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Has Problem', 'NotFound Try To Agin', [
        {text: 'OK', style: 'destructive'},
      ]);
    }
  };
  const ShowCardPost = itemsData => {
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
  const handleLoadMore = async () => {
    const itemsPok = await getFullIdName(nextPage);
    const dataMore = [...listAllPokemon, ...itemsPok.fullIdName];
    setListAllPokemon(dataMore);
    setNextPage(itemsPok.next);
  };
  return (
    <View style={styles.cViewMain}>
      <ImageBackground
        style={styles.cImage}
        resizeMode="contain"
        source={require('./../assets/Images/bg-login.jpg')}>
        <View style={styles.cViewMiddle}>
          <SearchBar
            onChangeText={setHero}
            value={nameHero}
            placeholder="Search Your Pokemon : Bulbasaur"
            onPress={searchPokemon}
          />
          <FlatList
            numColumns="2"
            data={listAllPokemon}
            keyExtractor={(item, index) => index.toString()}
            initialNumToRender={20}
            onEndReachedThreshold={5}
            renderItem={ShowCardPost}
            onEndReached={handleLoadMore}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ScreenHome;

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
