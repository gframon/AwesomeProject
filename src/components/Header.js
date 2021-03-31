import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../containers/styles/sharedStyles';

export const Header = (props) => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.headerImage} source={props.image} />
      <Text style={props.style}>{props.heading}</Text>
    </View>
  );
};
