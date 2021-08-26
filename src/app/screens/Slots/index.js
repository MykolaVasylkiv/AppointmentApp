import React, {useContext, memo} from 'react';
import PropTypes from 'prop-types';

import {View, SectionList, Text} from 'react-native';

import SlotItem from './SlotItem';

import {SlotContext} from '../../contexts/slots-context';

import styles from './styles';

const Slots = props => {
  const {navigation} = props;
  const [{slots}] = useContext(SlotContext);

  return (
    <View style={styles.container}>
      <SectionList
        sections={slots || []}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, section: {id}}) => (
          <SlotItem slot={{...item, dayId: id}} navigation={navigation}/>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

Slots.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(Slots);
