import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
import { checkAuthentication, setUser } from '../utils';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();
export const LoginScreen = () => {

  const user = ['user1','user2']
  const {navigate} = useNavigation();
  useEffect(() => {
    const CheckLogin = async () => {
      if(await checkAuthentication()) {
        navigate('tabs')
      }
    };

    CheckLogin();
  },[navigate]);

  const handleLogin = async (user: string) => {
    await setUser(user);
    const loggedIn = await checkAuthentication();
    if (loggedIn) {
      navigate('tabs')
    }
  }
  return (
    <View>
      <Button onPress={()=> handleLogin(user[0])}>
        Login with {user[0]}
      </Button>
      <Button onPress={()=> handleLogin(user[1])}>
        Login with {user[1]}
      </Button>
    </View>
  );
};
