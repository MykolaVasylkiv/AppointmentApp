import React, {memo, useContext, useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, Button, Text, Alert} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import {SlotContext} from '../../contexts/slots-context';

import FormInput from '../../modules/form/FormInput';

import styles from './styles';

const SLOT_PROPERTIES = {
  userName: 'userName',
  email: 'email',
  mobilePhone: 'mobilePhone',
};

const CreateBook = props => {
  const [, dispatch] = useContext(SlotContext);

  const formMethods = useForm({
    mode: 'onChange',
  });

  const {
    navigation,
    route: {
      params: {
        slot: {
          dayId,
          slotId,
          userInfo: {userName, mobilePhone, email},
        },
      },
    },
  } = props;

  const editSlot = data => {
    dispatch({
      type: 'EDIT_SLOT',
      payload: {
        dayId,
        slotId,
        data,
      },
    });
  };

  const onSubmit = data => {
    editSlot(data);
    navigation.goBack();
  };

  const showErrorValidation = errors => {
    const msg = Object.values(errors)
      .map(({message}) => message)
      .join(', ');

    Alert.alert('Validation Error', msg);
  };

  const onError = errors => {
    showErrorValidation(errors);
  };

  const renderForm = () => (
    <FormProvider {...formMethods}>
      <Text>User Name</Text>
      <FormInput
        style={styles.input}
        name={SLOT_PROPERTIES.userName}
        rules={{
          required: 'Name is required!',
        }}
      />
      <Text>Phone</Text>
      <FormInput
        style={styles.input}
        name={SLOT_PROPERTIES.mobilePhone}
        rules={{
          required: 'Phone is required!',
        }}
      />
      <Text>Email</Text>
      <FormInput
        style={styles.input}
        name={SLOT_PROPERTIES.email}
        rules={{
          required: 'Email is required!',
        }}
      />
      <Button
        title="Save"
        onPress={formMethods.handleSubmit(onSubmit, onError)}
      />
    </FormProvider>
  );

  const renderSlotValue = () => (
    <View>
      <Text>User Name</Text>
      <Text>{userName}</Text>
      <Text>Email</Text>
      <Text>{email}</Text>
      <Text>Mobile Phone</Text>
      <Text>{mobilePhone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {!userName ? renderForm() : renderSlotValue()}
    </View>
  );
};

CreateBook.propTypes = {
  route: PropTypes.object.isRequired,
};

export default memo(CreateBook);
