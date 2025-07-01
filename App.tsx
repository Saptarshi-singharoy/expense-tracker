import {
  Dimensions,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Root from './app/Root';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        {/* <StatusBar /> */}
        <SafeAreaView style={styles.container}>
          <Root />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});

export default App;
