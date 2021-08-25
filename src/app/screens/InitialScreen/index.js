import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';

import styles from './styles';

const InitialScreen = props => {
  const navigateTo = screenName => () => props.navigation.navigate(screenName);

  return (
    <View style={styles.container}>
      <Button title="Book Appointments" onPress={navigateTo('Slots')} />
    </View>
  );
};

InitialScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(InitialScreen);
