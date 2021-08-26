import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './styles';
import dayjs from 'dayjs';

const SlotItem = props => {
  const {slot, navigation} = props;
  const {
    userInfo: {userName, email},
    time,
  } = slot;

  const onPressSlot = () => {
    navigation.navigate('CreateBook', {slot});
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onPressSlot}>
      {userName ? (
        <View>
          <Text>Time: {dayjs(time).format('HH')}</Text>
          <Text>User Name: {userName}</Text>
          <Text>Email: {email}</Text>
        </View>
      ) : (
        <View>
          <Text>Time: {dayjs(time).format('h A')}</Text>
          <Text>Available slot</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

SlotItem.propTypes = {
  slot: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default memo(SlotItem);
