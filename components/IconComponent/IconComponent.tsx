import React from 'react';
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconType } from '../../models';
import { Color } from '../../utils/Color';

const IconComponent = ({name, color=Color.white,size=14 }: IconType) => {

  if (name === undefined || !name){
    return <Text></Text>;
  }
  return 
  (
    <Icon name={name} color={color} size={size} />
  )
};

export default IconComponent;
