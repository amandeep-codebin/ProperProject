import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import TabNavigator from './screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from './utils/Color';
import SignUpScreen from './screens/SignUpScreen';


const LoginStack = () => {
  const Stack = createNativeStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

const SignUpStack = () => {
  const Stack = createNativeStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
  <Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen}/>
  </Stack.Navigator>
  )
}

const Core = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Store" component={TabNavigator}
          options={{
            headerStyle: { backgroundColor: Color.bg2 },
            headerTintColor: "white",
            headerTitleStyle: { fontSize: 20 },
            headerTitleAlign: "center",
          
          headerRight: () => (
          <Icon name="filter" size={20} color={Color.white}
          onPress={() => console.log('This is your filter list')} />
        ),
        
          }} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Core;
