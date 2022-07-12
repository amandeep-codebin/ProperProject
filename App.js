import React from 'react';
import { Provider } from 'react-redux';
import Core from './Core';
import store from './redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',

    accent: 'yellow',
  },
};

const App = () => {
  return( 
  <Provider store={store}>
    <PaperProvider theme={theme}>
    <Core />
    </PaperProvider>
  </Provider>)
 
};

export default App;
