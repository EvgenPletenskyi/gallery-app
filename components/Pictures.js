import React from 'react';
import {connect} from 'react-redux';
import {getPictures} from '../redux/actions/picturesActions';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

class Pictures extends React.Component {
  componentDidMount() {
    this.props.getPictures();
  }
  render() {
    const {pictures} = this.props.pictures;

    return (
      <SafeAreaView style={styles.main__container}>
        <ScrollView>
          <View style={styles.pictures}>
            {pictures.map(u => (
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.navigation.navigate('FullPicture', u.urls);
                }}
                key={u.id}>
                <View>
                  <Image
                    source={{uri: u.urls.small_s3}}
                    style={styles.picture}
                  />
                  <Text style={styles.text}>{u.user.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({pictures: state.pictures});

export default connect(mapStateToProps, {getPictures})(Pictures);

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
    marginTop: 10,
  },
  pictures: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  picture: {
    width: 150,
    height: 150,
  },
  text: {
    width: 150,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
