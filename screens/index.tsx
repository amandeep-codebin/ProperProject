import React, { ReactNode } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { Text, View } from "react-native";
import { Color } from "../utils/Color";
import { IconComponent } from "../components";
import Icon from "react-native-vector-icons/FontAwesome";
import  {Cart} from './Cart';


const Tab = createBottomTabNavigator()


const TabNavigator = () => {
    return (
        <Tab.Navigator
        
            screenOptions={{
                headerShown: false, 
                tabBarStyle : {
                    backgroundColor:Color.bg2
                }
            }}
            >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => {
                        return <Icon name="home"  color={Color.bg1} size={20} />
                    }
                }}
            />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => {
                        return <Icon name="shopping-cart" color={Color.bg1} size={20} />
                    }
                }} />
        </Tab.Navigator>
    )

}

export default TabNavigator