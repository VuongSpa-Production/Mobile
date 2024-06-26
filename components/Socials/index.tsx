/**
 * Socials.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from './styles';
import SvgIcon from '../../components/SvgIcon';

type SocialsProps = {
    spacing?: number;
    width?: number;
    height?: number;
    loginOrRegisterText?: string;
};

const Socials = (props: SocialsProps) => {
    const {
        width = 24,
        height = 24,
        spacing = 10,
        loginOrRegisterText
    } = props

    const handleSocialLogin = () => {
        Alert.alert('Chức năng đang được phát triển!');
    }

    return (
        <View>
            <Text>{loginOrRegisterText}</Text>
            <View style={styles.socials}>
                <TouchableOpacity
                    style={styles.socialButton}
                    onPress={handleSocialLogin}
                >
                    <SvgIcon name="google" width={width} height={height} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: spacing }} />
                <TouchableOpacity
                    style={styles.socialButton}
                    onPress={handleSocialLogin}
                >
                    <SvgIcon name="facebook" width={width} height={height} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Socials;