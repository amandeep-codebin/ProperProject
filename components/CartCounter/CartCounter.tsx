import React, { useState } from "react";
import { Text, View } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import { gutter } from "../../utils";
import { Color } from "../../utils/Color";


const CartCounter = () => {
    const [count, setCount] = useState(1)

    return( 
    <View style={{backgroundColor:Color.bg2,flexDirection:"row", justifyContent:"space-between",width:83,padding:gutter/2, borderRadius:4}}> 
    {/* <Text style={{color:Color.primary, fontSize:12, fontWeight:'900'}}>-</Text> */}
    <Icon name="minus" style={{color:Color.primary, fontSize:12, fontWeight:'900'}} onPress={() => console.log("Decresing item by 1")} />
    <Text style={{color:Color.primary, fontSize:12, fontWeight:'900'}}>1</Text>
    {/* <Text style={{color:Color.primary, fontSize:12, fontWeight:'900'}}>+</Text> */}
    <Icon name="plus" style={{color:Color.primary, fontSize:12, fontWeight:'900'}} onPress={() => console.log("Increasing item by 1")} />
    </View>)
}

export default CartCounter