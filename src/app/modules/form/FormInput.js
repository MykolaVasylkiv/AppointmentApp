import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {useController, useFormContext} from 'react-hook-form';

const FormInput = props => {
  const {name, rules, defaultValue = '', ...inputProps} = props;

  const formContext = useFormContext();
  const {control} = formContext;

  const {field} = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  return (
    <TextInput
      {...inputProps}
      onChangeText={field.onChange}
      value={field.value}
    />
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default FormInput;
