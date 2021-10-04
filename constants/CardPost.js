import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Colors from './Colors';
import {loadImageInName} from './../services/ServiceMain';
const CardPost = ({name, onPress}) => {
  const [image, setImage] = useState(
    'https://media.wired.com/photos/592722c1af95806129f51b71/master/pass/MIT-Web-Loading.jpg',
  );
  loadImageInName(name).then(result => {
    setImage(result);
  });
  return (
    <View style={styles.cViewPostCardMain}>
      <Text style={styles.cViewPostCardHeadText}>{name}</Text>
      <Image
        resizeMode="cover"
        style={styles.cViewPostCardImage}
        source={{
          uri: image,
        }}
      />
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.cViewPostCardButton}>
          <Text style={styles.cViewPostCardButtonText}>Detail {name}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  cViewPostCardMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 250, 250, 0.9)',
    borderColor: 'rgba(66, 66, 66, 0.4)',
    borderWidth: 1,
    elevation: 8,
    borderRadius: 8,
    margin: 10,
    paddingVertical: 10,
  },
  cViewPostCardHeadText: {
    color: '#51585a',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cViewPostCardImage: {
    width: 120,
    height: 120,
  },
  cViewPostCardButton: {
    backgroundColor: Colors.blue,
    elevation: 8,
    borderRadius: 4,
    padding: 5,
  },
  cViewPostCardButtonText: {
    color: Colors.grey,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
