import React, { useEffect } from 'react';
import { Text, View, StatusBar, FlatList, ScrollView } from 'react-native';
import { BUTTON_TYPES } from '../components/Button/Button';
import { Button, ProductCard, Search, Spacer } from '../components';
import { Color } from '../utils/Color';
import { gutter } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux';
import { ProductsData } from '../redux/slices/ProductSlices';
import { ProductType } from '../models';
import Buttonn from '../components/Button/Button1';

export const HomeScreen = () => {
  const dispatch: AppDispatch = useDispatch()
  const { products, loading, error } = useSelector((state: RootState) => state.productRedu)
  console.log("products home screen", products)
  useEffect(() => {
    dispatch(ProductsData())
  }, [dispatch])

  const renderItem = ({ item, index }: { item: ProductType , index: number}) => {
    return (
      <View style={{marginRight: index %2 === 0 ? gutter : 0}}>
        <ProductCard id={item.id}
          title={item.title}
          price={item.price}
          desc={item.desc}
          discount={item.discount}
        />
        <Spacer height={12} />
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: Color.bg2,
      padding: gutter,
    }}>
      <Search />
      <Spacer height={12} />

      {/* <ProductCard id="aam12" title="Product1" price={1200} desc="Lorem ipsum" discount={10}/>

    <Spacer height={12} />
    <ProductCard id="aam12" title="Product1" price={1200} desc="Lorem ipsum"/> */}
      {/* <ScrollView> */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}

      // style={{marginLeft: gutter/2}}
      // 
      />

      {/* </ScrollView> */}

      {/* <Button text="Hello world" onPress={function (): void {} } /> */}
      {/* buttonstyles={btnStyle.button} textStyles={txtStyle.textStyle}   */}
      {/* <Spacer /> */}

      {/* <Button text={"Hello world"}  
    variant={BUTTON_TYPES.secondary}/>
    buttonstyles={btnStyle.secondary} textStyles={txtStyle.secondary}
    <Spacer />

    <Button text={"Hello world"} 
    variant={BUTTON_TYPES.outline} />
    buttonstyles={btnStyle.outline} textStyles={txtStyle.outline}
    <Spacer />

    <Button text={"Hello world"}
    variant={BUTTON_TYPES.link} />
    buttonstyles={btnStyle.link} textStyles={txtStyle.link}
    <Spacer /> */}
    {/* <Buttonn varient='primary' title='Add Products'/>
    <Spacer height={5} />
    <Buttonn varient='secondary' title='Add Products'/>
    <Spacer height={5} />
    <Buttonn varient='outline' title='Add Products'/>
    <Spacer height={5} />
    <Buttonn varient='link' title='Add Products'/>
    <Spacer height={5} /> */}
    </View>

  )
};