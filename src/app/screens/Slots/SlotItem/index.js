import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

const SlotItem = props => {
  const {slot, navigation} = props;
  const {
    userInfo: {userName},
  } = slot;
  console.log(props);

  const onPressSlot = () => {
    navigation.navigate('CreateBook', {slot});
  };

  return (
    <TouchableOpacity onPress={onPressSlot}>
      <Text>{userName}</Text>
    </TouchableOpacity>
  );
};

SlotItem.propTypes = {
  slot: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default SlotItem;
