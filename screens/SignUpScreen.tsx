import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const SignUpScreen= () => {
    const navi = useNavigation<NavigationProp<any>>();
    const handlenavigate = () => {
        navi.navigate('home');
    };
    return (
        <View>
            <Text> Sign Up page</Text>
            <Button onPress={handlenavigate}>
                Back to home
            </Button>
        </View>
    )
}

export default SignUpScreen;