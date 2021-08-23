import React from 'react';
import {View, Button} from 'react-native';

import styles from './styles';

const InitialScreen = props => {
  const navigateTo = screenName => () => props.navigation.push(screenName);

  console.log(props);
  return (
    <View style={styles.container}>
      <Button title="Book Appointments" onPress={navigateTo('Slots')} />
    </View>
  );
};

export default InitialScreen;
