import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { useWalletDispatch } from '../redux/hooks';
import { add_expense } from '../redux/slices/walletSlice';

const AddExpenseModal = (props: any) => {
  const dispatch = useWalletDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    dispatch(add_expense(Number(data.amount)));
    props.hideModal();
  };
  return (
    <>
      <Button icon={'close'} style={styles.crossBtn} onPress={props.hideModal}>
        {''}
      </Button>
      <View style={styles.container}>
        <Text variant="titleLarge">Add Expense</Text>

        <Controller
          control={control}
          name="title"
          rules={{ required: 'Title is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Category"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              error={!!errors.title}
              style={styles.input}
            />
          )}
        />
        {errors.title && typeof errors.amount?.message === 'string' && (
          <Text style={styles.error}>{errors.amount.message}</Text>
        )}

        <Controller
          control={control}
          name="amount"
          rules={{
            required: 'Amount is required',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Enter a valid number',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Amount"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              keyboardType="numeric"
              error={!!errors.amount}
              style={styles.input}
            />
          )}
        />
        {errors.amount && typeof errors.amount?.message === 'string' && (
          <Text style={styles.error}>{errors.amount.message}</Text>
        )}
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
    </>
  );
};

export default AddExpenseModal;

const styles = StyleSheet.create({
  crossBtn: {
    alignSelf: 'flex-end',
    width: 5,
  },
  container: {
    padding: 20,
    gap: 10,
  },
  input: {
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});
