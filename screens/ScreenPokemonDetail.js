import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import CardPostDetail from '../constants/CardPostDetail';
import {getFullPokemonInId} from './../services/ServiceMain';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {AddFavorite} from '../store/actions/PokemonActions';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
const ScreenPokemonDetail = ({navigation, route}) => {
  const redState = useSelector(state => state.favList);
  const [PokemonDetail, setPokemonDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getFullPokemonInId(route.params.name).then(itemsDetailPok => {
      if (redState.length >= 1) {
        const nNumber = redState.findIndex(
          item => item.name === itemsDetailPok.name,
        );
        if (nNumber >= 0) {
          setChangeColor(true);
        } else {
          setChangeColor(false);
        }
      }
      setPokemonDetail(itemsDetailPok);
      setIsLoading(true);
      navigation.setOptions({
        title: itemsDetailPok.name,
        headerRight: () => (
          <Icon
            name="star"
            type="font-awesome"
            color={changeColor ? Colors.red : Colors.black}
            onPress={() => {
              setChangeColor(!changeColor);
              dispatch(AddFavorite(itemsDetailPok));
            }}
          />
        ),
      });
    });
  }, [
    route.params.name,
    setPokemonDetail,
    navigation,
    dispatch,
    changeColor,
    redState,
  ]);
  return (
    <View style={styles.cViewMain}>
      <ImageBackground
        style={styles.cImage}
        resizeMode="contain"
        source={require('./../assets/Images/bg-login.jpg')}>
        {isLoading && <CardPostDetail dataPostDetail={PokemonDetail} />}
      </ImageBackground>
    </View>
  );
};

export default ScreenPokemonDetail;

const styles = StyleSheet.create({
  cViewMain: {
    flex: 1,
  },
  cImage: {
    flex: 1,
  },
});
