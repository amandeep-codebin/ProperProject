import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TypographyType } from '../../models';
import { Color } from '../../utils/Color';

const Typography = ({variant = 'regular', centered = false, style= {}, children} : TypographyType) => {
  
  const styles = StyleSheet.create({
    text: {
      color:Color.white,
      fontSize:15,
      textAlign: centered ? 'center' : 'left',
      fontWeight: variant === 'heading' ? '800' : 'normal'
    }
  })
  
  return (
      <Text style={[styles.text, style]}>{children}</Text>
  );
};

export default Typography;
