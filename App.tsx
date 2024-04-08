import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from 'navigators/RootNavigator';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export default function App() {

  return (
    <Provider store={store}>
      {/* device status bar */}
			<StatusBar barStyle="dark-content" backgroundColor="#090909" />

      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}