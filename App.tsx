import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from '@/navigators/RootNavigator';
import { store } from '@/redux/store';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
  },
};

export default function App() {

  return (
    <Provider store={store}>
      {/* device status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#090909" />

      <NavigationContainer theme={CustomDarkTheme}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}