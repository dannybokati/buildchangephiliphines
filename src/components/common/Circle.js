import React from 'react';
import { Text } from 'react-native';

const Circle = (props) => {
  return (
      <Text style={styles.circleRed}>{props.text}</Text>
  );
};


const styles = {
    circleGreen: {
        borderWidth: 1,
        color: '#8CC63E',
        borderColor: '#8CC63E',
        fontSize: 36,
        textAlign: 'center',
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 16,
        width: 55,
        height: 55,
        borderRadius: 55 / 2
    },
    circleRed: {
        borderWidth: 1,
        color: '#E8656A',
        borderColor: '#E8656A',
        fontSize: 36,
        textAlign: 'center',
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 16,
        width: 55,
        height: 55,
        borderRadius: 55 / 2
     }
};

export { Circle };
