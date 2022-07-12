import React from "react";
import { View, StyleSheet } from "react-native";
import { gutter } from "../../utils";

const Spacer =({height = gutter}: {height :number}) => {
    const styles=StyleSheet.create({
        spacer:{
            width: '100%',
            height
        }
    })
    return <View style={styles.spacer}></View>
}
export default Spacer