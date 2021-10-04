import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';
import {loadImageInName} from './../services/ServiceMain';
import Colors from './Colors';

const CardPostDetail = ({dataPostDetail}) => {
  const [image, setImage] = useState(
    'https://media.wired.com/photos/592722c1af95806129f51b71/master/pass/MIT-Web-Loading.jpg',
  );
  useEffect(() => {
    loadImageInName(dataPostDetail.name).then(result => {
      setImage(result);
    });
  }, [dataPostDetail]);

  return (
    <View>
      <View style={styles.cSectionMain}>
        <View style={styles.cSectionOne}>
          <Image
            style={styles.cSectionOneImage}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.cSectionTwo}>
          <View style={styles.cInfoOne}>
            <View style={styles.cBoxingHeadOne}>
              <Text style={styles.cInfoNameBlue}>Type </Text>
              {dataPostDetail.types.map((item, index) => {
                return (
                  <Text key={index} style={styles.cInfoNameBlack}>
                    {item.name}{' '}
                  </Text>
                );
              })}
            </View>
            <View style={styles.cBoxingHeadOne}>
              <Text style={styles.cInfoNameBlue}>Weight </Text>
              <Text style={styles.cInfoNameBlack}>
                {dataPostDetail.weight}{' '}
              </Text>
              <Text style={styles.cInfoNameBlue}>Height </Text>
              <Text style={styles.cInfoNameBlack}>{dataPostDetail.height}</Text>
            </View>
          </View>
          <View style={styles.cBoxContainer}>
            <View style={styles.cBoxMain}>
              <View style={styles.cBoxing}>
                <Text style={styles.cInfoNameBlue}>Hp</Text>
                <View>
                  <Text style={styles.cInfoNameBlack}>
                    Base Stat : {dataPostDetail.hp.base_stat}
                  </Text>
                  <Text style={styles.cInfoNameBlack}>
                    Effort : {dataPostDetail.hp.effort}
                  </Text>
                </View>
              </View>
              <View style={styles.cBoxing}>
                <Text style={styles.cInfoNameBlue}>Defense</Text>
                <View>
                  <Text style={styles.cInfoNameBlack}>
                    Base Stat : {dataPostDetail.defense.base_stat}
                  </Text>
                  <Text style={styles.cInfoNameBlack}>
                    Effort : {dataPostDetail.defense.effort}
                  </Text>
                </View>
              </View>
              <View style={styles.cBoxing}>
                <Text style={styles.cInfoNameBlue}>Special Defense</Text>
                <View>
                  <Text style={styles.cInfoNameBlack}>
                    Base Stat : {dataPostDetail.special_defense.base_stat}
                  </Text>
                  <Text style={styles.cInfoNameBlack}>
                    Effort : {dataPostDetail.special_defense.effort}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cBoxMain}>
              <View style={styles.cBoxing}>
                <Text style={styles.cInfoNameBlue}>Speed</Text>
                <View>
                  <Text style={styles.cInfoNameBlack}>
                    Base Stat : {dataPostDetail.speed.base_stat}
                  </Text>
                  <Text style={styles.cInfoNameBlack}>
                    Effort : {dataPostDetail.speed.effort}
                  </Text>
                </View>
              </View>
              <View style={styles.cBoxing}>
                <Text style={styles.cInfoNameBlue}>Attack</Text>
                <View>
                  <Text style={styles.cInfoNameBlack}>
                    Base Stat : {dataPostDetail.attack.base_stat}
                  </Text>
                  <Text style={styles.cInfoNameBlack}>
                    Effort : {dataPostDetail.attack.effort}
                  </Text>
                </View>
              </View>
              <View style={styles.cBoxing}>
                <Text style={styles.cInfoNameBlue}>Special Attack</Text>
                <View>
                  <Text style={styles.cInfoNameBlack}>
                    Base Stat : {dataPostDetail.special_attack.base_stat}
                  </Text>
                  <Text style={styles.cInfoNameBlack}>
                    Effort : {dataPostDetail.special_attack.effort}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPostDetail;

const styles = StyleSheet.create({
  cSectionMain: {
    height: '100%',
    backgroundColor: 'rgba(250, 250, 250, 0.2)',
  },
  cSectionOne: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cSectionOneImage: {
    width: Dimensions.get('screen').height / 2.5,
    height: '100%',
  },
  cSectionTwo: {
    height: '50%',
    backgroundColor: 'rgba(33, 33, 33, 0.8)',
    padding: 15,
  },
  cInfoOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cInfoName: {
    color: Colors.grey,
    fontSize: 17,
  },
  cInfoNameBlue: {
    color: '#0096c7',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cInfoNameBlack: {
    color: '#51585a',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cBoxContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  cBoxMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cBoxingHeadOne: {
    backgroundColor: 'rgba(230,244,255,1)',
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
  },
  cBoxing: {
    backgroundColor: 'rgba(230,244,255,1)',
    borderRadius: 8,
    padding: 5,
  },
});
