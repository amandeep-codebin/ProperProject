import React, { useState } from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { ButtonType } from "../../models";
import { gutter } from "../../utils";
import { Color } from "../../utils/Color";
// import Spacer from "../Spacer/Spacer";

export const BUTTON_TYPES = { //Here are the variants of the button which is showing that the button is of which type.
  primary: "primary",
  secondary: "secondary",
  outline: "outline",
  link: "link",
}

const Button = ({
  text,
  buttonstyles,
  variant = BUTTON_TYPES.primary,
  onPress,
  textStyles,
  disabled = false,
  block = false
}: ButtonType) => {


  const [pressed, setPressed] = useState(false)
  const btnStyle = StyleSheet.create({
    button: {
      backgroundColor: Color.primary,
      padding: gutter,
      borderRadius: 8,
      width: block ? '100' : 'auto',
      opacity: pressed ? 0.8 : 1,
    },
    secondary: {
      backgroundColor: Color.white
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: Color.primary,
    },
    link: {
      backgroundColor: 'transparent',
    }
  })

  const txtStyle = StyleSheet.create({
    textStyle: {
      color: Color.white,
      fontWeight: '800',
      textAlign: "center",
    },
    secondary: { color: Color.primary },
    outline: {
      color: Color.primary
    },
    link: {
      color: Color.primary
    }
  })

  const Disabled = StyleSheet.create({
    button: {
      backgroundColor: Color.bg1,
      padding: gutter,
      borderRadius: 8,
      Widht: block ? '100%' : 'auto',
    }
  })

  if (Disabled) {
    return (
      <View style={Disabled.button}>
        <Text style={txtStyle.textStyle}>{text}</Text>
      </View>
    )
  }
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[btnStyle.button]}

    >
      <Text
        style={txtStyle.textStyle}>{text}</Text>
    </Pressable>
  )
}
// const buttonstyles = StyleSheet.create({
//     btnStyle : {
//         backgroundColor:buttonColor,
//         justifyContent:"center",
//         height:40,
//         borderRadius:8
//     },
//     textStyle:{
//         color:textColor,
//         fontWeight: "800",
//         fontSize: 14,
//         textAlign:"center"
//     }
// })

export default Button;