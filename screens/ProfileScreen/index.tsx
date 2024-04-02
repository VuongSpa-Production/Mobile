/**
 * ProfileScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */

import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';
import { Button } from '@rneui/base';

import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Profile = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <View style={styles.container}>
             <Text style={styles.text}>Profile!</Text>
             <Button title="Đăng xuất" onPress={() => {handleLogout()}} />
        </View>
    );
}


export default Profile;