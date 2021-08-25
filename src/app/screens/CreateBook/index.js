import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, Button} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import FormInput from '../../modules/form/FormInput';

import styles from './styles';

const SLOT_PROPERTIES = {
  userName: 'userName',
  email: 'email',
  userPhone: 'userPhone',
};

const CreateBook = props => {
  const formMethods = useForm({
    mode: 'onChange',
  });

  const {
    route: {
      params: {
        slot: {
          userInfo: {userName, mobilePhone, email},
        },
      },
    },
  } = props;

  const onSubmit = data => {
    console.log(data);
  };

  const onError = errors => {
    console.log(errors);
  };

  return (
    <View style={styles.container}>
      <FormProvider {...formMethods}>
        <FormInput
          name={SLOT_PROPERTIES.userName}
          rules={{
            required: 'Name is required!',
          }}
        />
        <FormInput
          name={SLOT_PROPERTIES.userPhone}
          rules={{
            required: 'Phone is required!',
          }}
        />
        <FormInput
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
    </View>
  );
};

CreateBook.propTypes = {
  route: PropTypes.object.isRequired,
};

export default memo(CreateBook);
