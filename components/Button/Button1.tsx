
import React from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { Title } from "react-native-paper";
import { Color } from "../../utils/Color";

export const BUTTON_VARIANTS = {
    'primary': 'primary',
    'secondary': 'secondary',
    'outline': 'outline',
    'link': 'link'
}
const bstyle = StyleSheet.create({
    primary: {
        backgroundColor: Color.primary,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondary: {
        backgroundColor: Color.white,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    outline: {
        borderRadius: 8,
        backgroundColor: 'transparent',
        borderColor: Color.primary,
        borderWidth: 2,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        backgroundColor: 'transparent',
        // justifyContent:'center',
        // alignItems:'center',
        height: 40,
    }
})

const tstyle = StyleSheet.create({
    primary: {
        color: Color.white,
        fontWeight: '800',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondary: {
        color: Color.primary,
        fontWeight: '800',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    outline: {
        color: Color.primary,
        fontWeight: '800',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: Color.primary,
        fontWeight: '500',
        fontSize: 12,

    }
})

const Buttonn = ({ varient, title, onPress }: { varient: keyof typeof bstyle, title: string, onPress: ()=> void }) => {


    return (
        <Pressable
            style={bstyle[varient]}
            onPress={onPress}
        >
            <Text
                style={tstyle[varient]}>{title}</Text>
        </Pressable>
    )
}

export default Buttonn;