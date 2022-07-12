import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color } from "../../utils/Color";
import ProductImage from '../../assets/images/Product_image.png'
import { getFullWidth, gutter } from "../../utils";
import { ProductType } from "../../models";
import Typography from "../Typography/TypoGraphy";
import Spacer from "../Spacer/Spacer";
import Buttonn from "../Button/Button1";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/slices/CartSlice";
import { AppDispatch, RootState } from "../../redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const w = (getFullWidth() - 3*gutter) /2;

const ProductCard = (product: ProductType) => {
    const dispatch:AppDispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.getItem('user').then(data => {
            if(typeof data ==='string'){
                setCurrentUser(data)
            }
        })
    },[])
    const [currentUser, setCurrentUser] = useState<string>('');
    const {currentCartId} = useSelector((state:RootState) => state.CartRedu )
console.log("currentCartId", currentCartId)
    const {id, title, desc, price, discount, image} = product; 

    if(!id || !title || !price) {
        return null;
    }

    // console.log("currentUser: ",currentUser)

   
    let finalPrice =price ;
    if(discount !== undefined && discount) {
    finalPrice = price -(price/discount); 
    }


    const handleAddCart = () => {
        dispatch(AddToCart({id:currentCartId,UserId:'User2',price:price,ProdId:id})
        )
    }
return(
    <View style={styles.card}>
        <Image source={ProductImage} style={styles.image} />
    <View style={styles.details}>
        <Spacer height={5} />
        <Typography variant ="heading" centered={true}> 
            {title}
        </Typography>
        <Spacer height={5} />
       {desc !== undefined ?
        <Typography centered={true}>{desc}</Typography> : null}
        <Spacer height={5} />
        <Typography centered={true} style={{color:Color.primary, fontSize:20}}>
            {`Rs. ${price}/-`}
        </Typography>
        <Spacer height={5} />
        <Typography centered={true}>
            {`M.r.p. Rs. ${Math.round(finalPrice)}/- (${discount}%)`}
        </Typography>
    </View>
    <Buttonn 
    title={'Add to cart'}
    varient='primary'
    onPress={() => handleAddCart()}
    // buttonstyles = {BUTTON_TYPES.secondary
    />
    </View>
)}

const styles = StyleSheet.create({
    card:{
        // flex:1,
        backgroundColor: Color.bg1,
        borderRadius:18,
        overflow:"hidden",
        flexDirection:'column',
        width:w,
        // height: 235,
    },
    image: {
        // borderTopEndRadius:12,
        height:100,
        width: w,
    },
    details:{
        padding:gutter
    }
})

export default ProductCard
