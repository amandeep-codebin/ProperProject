import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CartCounter, Spacer, Typography } from "../components";
import { AppDispatch, RootState } from "../redux";
import { AddToCart, CartProduct } from "../redux/slices/CartSlice";
import { getFullWidth, gutter } from "../utils";
import { Color } from "../utils/Color";
import ProductImage from '../assets/images/Product_image.png'

const w = getFullWidth() - 2 * gutter
export const Cart = () => {
  const { carts, loading, error } = useSelector((state: RootState) => state.CartRedu)
  console.log("CARTTTTTTTTT IN CART.TSX", carts)
  const {products}= carts;
   console.log("cartsss ptoductsss", products)
  const idsToMatch = carts.products.map(item => item.ProdId)
  console.log("matched id is....", idsToMatch)
  const dispatch: AppDispatch = useDispatch();

  // const ProductList = useSelector((state: RootState) => state.productRedu.products)
  // console.log("ProductList", ProductList)
  useEffect(() => {
    dispatch(CartProduct());
  }, [dispatch]);

  // const renderItem = ({ item, index }: { item: CarktType , index: number}) => {
  //     console.log("item in cart iss", item) 
  //     return (
  //       <View style={{marginRight: index %2 === 0 ? gutter : 0}}>
  //         {/* <CartProduct /> */}
  //         <Spacer height={12} />
  //       </View>
  //     )
  //   }
  return (
   <View>
    {products.map((item) => (
           <View style={styles.cart}>
           <Image source={ProductImage} style={styles.image} />
          <View style={{ margin: gutter / 2, flexDirection: "column", justifyContent: "space-between" }}>
             <Typography variant="regular" centered={false} style={{ fontSize: 14, fontWeight: "400" }}>
               lorem ipsum
             </Typography>
             <View style={{ justifyContent: "space-between", flexDirection: "row", width: 232 }}>
               <Typography variant="heading" centered={false} style={{ color: Color.primary, marginTop: 6 }}>{`Rs ${item.price}/-`}</Typography>
               <CartCounter />
             </View>
           </View>
       </View>
          // <View style={{ justifyContent: "flex-end", margin: gutter }}>

          //   <Buttonn varient="primary" title="Proceed to checkout" onPress={() => console.log("Your final bill")} />
          // </View>
    ))}
   </View>
    // <FlatList>

    // </FlatList>
    // <View>
    //   <Text>
    //     caghfv
    //   </Text>
    // </View>

    // {
    //   products.map((item: ProductType) =>
    //     <>
    //       // <View style={styles.cart}>
    //       //   <Image source={ProductImage} style={styles.image} />
    //       //   <View style={{ margin: gutter / 2, flexDirection: "column", justifyContent: "space-between" }}>
    //       //     <Typography variant="regular" centered={false} style={{ fontSize: 14, fontWeight: "400" }}>
    //       //       lorem ipsum
    //       //     </Typography>
    //       //     <View style={{ justifyContent: "space-between", flexDirection: "row", width: 232 }}>
    //       //       <Typography variant="heading" centered={false} style={{ color: Color.primary, marginTop: 6 }}>{`Rs ${item.price}/-`}</Typography>
    //       //       <CartCounter />
    //       //     </View>
    //       //   </View>
    //       // </View>
    //       // <View style={{ justifyContent: "flex-end", margin: gutter }}>

    //       //   <Buttonn varient="primary" title="Proceed to checkout" onPress={() => console.log("Your final bill")} />
    //       // </View>

    //     </>
    //   )
    // }
  )
} 
const styles = StyleSheet.create({
  cart: {
    flexDirection: "row",
    backgroundColor: Color.bg1,
    height: 98,
    width: w,
    // padding:gutter,
    borderRadius: 8,
    marginLeft: gutter,
    marginTop: gutter,
    overflow: "hidden"
  },

  image: {
    height: 100,
    width: 126,
  }

})
