import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {SlotContext} from '../../contexts/slots-context';

import styles from './styles';

const Slots = () => {
  const [store, dispatchSlot] = useContext(SlotContext);
  console.log(store);

  return (
    <View style={styles.container}>
      {store.slots.map(({userName, id}) => (
        <Text key={String(id)}>{userName}</Text>
      ))}
    </View>
  );
};

export default Slots;
