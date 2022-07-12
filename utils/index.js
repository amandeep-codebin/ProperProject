import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';

export const getFullWidth = () => Dimensions.get('screen').width;
export const getDeiceHeight = () => Dimensions.get('screen').height;
export const gutter= 16;

export const setUser = async (user) =>  {
    await AsyncStorage.setItem('user', user)
}

export const getUser = async() => {
    await AsyncStorage.getItem('user')
}

export const removeUser = async() => {
    await AsyncStorage.removeItem('user')
}

export const checkAuthentication = async() => {
const user = await AsyncStorage.getItem('user');
if (user)
    return true
return false
}
