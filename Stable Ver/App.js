/**
 * Team Tom Cats
 * Tran Quang Tong + Tran Nguyen Thien Thanh
 * FROM HCMUS
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View,
  TextInput,
  Button
} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component {
  state = {
    placeName: "",
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ""
      };
    });
  }

  render() {
    const placeOutput = this.state.places.map((place, i) => (
      //<Text key={i}>{place}</Text>
      <ListItem key={i} placeName={place} />
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Team Tom and Jerry: Demo App</Text>
        <Text style={styles.instructions}>1512499 - Tran Nguyen Thien Thanh</Text>
        <Text style={styles.instructions}>1512585 - Tran Quang Tong</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type something here..."
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />

          <Button
            title="Add"
            onPress={this.placeSubmitHandler}
            style={styles.placeButton}
          />
        </View>

        <View style={styles.listContainer}>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
  }
});
