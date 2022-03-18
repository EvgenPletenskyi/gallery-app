import React from 'react';
import {Image, View} from 'react-native';

const FullPicture = picture => {
  return (
    <View>
      <Image
        source={{uri: picture.route.params.small_s3}}
        style={{resizeMode: 'contain', width: '100%', height: '100%'}}
      />
    </View>
  );
};
export default FullPicture;
