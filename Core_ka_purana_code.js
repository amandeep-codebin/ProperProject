// import * as React from 'react';
import React, { useEffect } from 'react';
import { SafeAreaView,Text, Button, StatusBar, View} from 'react-native';
// import { Button } from 'react-native-paper';
import {Icon, Typography, VectorIcon} from './components';
import { useDispatch, useSelector} from 'react-redux';
import { ProductsData,ProductData, AddProductData } from './redux/slices/ProductSlices';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen  } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
const Stack = createNativeStackNavigator();

const Core = () => {
  const dispatch = useDispatch();
  const {loading, error, products} = useSelector(state=> state.productRedu)
  console.log("product data", products)
  useEffect(()=> {
   dispatch(ProductsData())
  },[dispatch])


useEffect(() => {
dispatch(ProductsData())
  },[dispatch])
  
  const handleFetch = () => {
    dispatch (ProductData({id: "prod2"}))
  }
  const handleAdd = () => {
    dispatch(AddProductData(
      {
        title:"Camera",
        price: 40000,

      }
    ))
  }



  
  
  return (
    // <SafeAreaView>
    //   <Button  icon="camera" mode="contained" dark="true" onPress={handleFetch}>Fetch Product</Button>
    //   <Button mode="outlined" onPress={handleAdd}>Add Product</Button>
    //   <Icon />
    //   <VectorIcon />
    //   <Typography />
    // </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name = "home" component={HomeScreen} />
    //     <Stack.Screen name = "login" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  <View>
  <StatusBar barStyle="dark-content" backgroundColor="grey"   />
  <Text>Hello this is Product list page</Text>
  </View>

  );
};

export default Core;
