import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';

const Bag = () => {

    return (
        <View style={styles.container}>
             <Text style={styles.text}>Giở hàng!</Text>
        </View>
    );
}


export default Bag;