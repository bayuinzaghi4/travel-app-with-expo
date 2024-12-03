import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

interface ButtonProps {
    onPress: () => void;
    children: () => void;
    title: string;
    style?: object;
}


const Button: React.FC<ButtonProps> = ({  
    onPress,
    title,
    style
    }) => {
  return (
    <Pressable 
    onPress={onPress}
    style={style}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#fff',
    },
    button: {
        color: 'tomato'
    }
});

export default Button;