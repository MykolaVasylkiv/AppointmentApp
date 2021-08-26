import React, {memo, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Button, AppState} from 'react-native';
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import {SlotContext} from '../../contexts/slots-context';
import {createInitSlots, generateDates} from '../../helpers';

const InitialScreen = props => {
  const [store, dispatch] = useContext(SlotContext);
  const navigateTo = screenName => () => props.navigation.navigate(screenName);

  useEffect(() => {
    AsyncStorage.getItem('slots').then(data => {
      const initData = createInitSlots(
        generateDates(dayjs(), dayjs().add(2, 'day')),
      );
      if (data === null) {
        AsyncStorage.setItem('slots', JSON.stringify(initData));
        dispatch({
          type: 'SET_INIT_DATA',
          payload: initData,
        });
      } else {
        dispatch({
          type: 'SET_INIT_DATA',
          payload: JSON.parse(data),
        });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'inactive') {
        AsyncStorage.setItem('slots', JSON.stringify(store?.slots));
      }
    });
  }, [store]);

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
