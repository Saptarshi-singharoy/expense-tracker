import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Modal } from 'react-native-paper';
import AddExpenseModal from '../components/AddExpenseModal';
import { useWalletSelector } from '../redux/hooks';

const HomeScreen = () => {
  const walletValue = useWalletSelector(state => state.wallet.amount);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.screenContainer}>
      <Button
        style={{
          width: '50%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}
        mode="contained"
        onPress={showModal}
        icon={'plus'}
      >
        Add Expense
      </Button>
      <Text>{walletValue}</Text>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <AddExpenseModal hideModal={hideModal} />
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  screenContainer: {
    flex: 1,
  },
});
