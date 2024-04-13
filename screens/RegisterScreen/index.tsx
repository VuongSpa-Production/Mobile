/**
 * RegisterScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React from 'react';
import { View, TouchableHighlight, Alert } from 'react-native';
import { Icon, useTheme, Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { Formik } from 'formik';
import * as yup from 'yup';
import { styles } from './styles';
import AnimatedTextInput from '../../components/AnimatedInput';
import Socials from '../../components/Socials';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';

import { authData } from '../../data/type';
import { processSignUp } from '../../api/mockAuth';
import { useDispatch } from 'react-redux';
import { login as reduxLogin } from '../../store/authSlice';

const Register = ({ navigation }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const validationSchema = yup.object().shape({
        email: yup.string().email(t('common:invalidEmail')).required(t('common:textRequired', { text: t('common:email') })),
        password: yup.string().min(6, t('common:textCharacters', { numbers: 6, text: t('common:password') })).required(t('common:textRequired', { text: t('common:password') })),
        name: yup.string().min(6, t('common:textCharacters', { numbers: 6, text: t('common:name') })).required(t('common:textRequired', { text: t('common:name') })),
    });

    const handleRegister = async (values: authData) => {
        try {
            const token = await processSignUp(values);
            dispatch(reduxLogin({
                username: ' ',
                email: values.email,
                token
            }));
        } catch (error) {
            Alert.alert(t('common:error'), error.message);
        }
    }

    return (
        <AppContainer>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text h1>{t('common:register')}</Text>
                </View>
                <View style={styles.form}>
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <>
                                <AnimatedTextInput
                                    placeholder={t('common:name')}
                                    // TODO: fix lại cho đúng kiểu data
                                    // value={values.name}
                                    value='okokok'
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    isError={touched.name && errors.name ? true : false}
                                    errorText={errors.name}
                                />
                                <AnimatedTextInput
                                    placeholder={t('common:email')}
                                    value={values.email}
                                    textInputProps={{
                                        keyboardType: 'email-address'
                                    }}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    isError={touched.email && errors.email ? true : false}
                                    errorText={errors.email}
                                />
                                <AnimatedTextInput
                                    placeholder={t('common:password')}
                                    value={values.password}
                                    textInputProps={{
                                        secureTextEntry: true
                                    }}
                                    onChangeText={handleChange('password')}
                                    isError={touched.password && errors.password ? true : false}
                                    onBlur={handleBlur('password')}
                                    errorText={errors.password}
                                />
                                <View style={styles.linkContainer}>
                                    <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('Login')}>
                                        <View>
                                            <Text h3>{t('common:haveAnAccount')}</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <Icon type="material-icons" size={16} name="trending-flat" color={theme.colors.error} />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button
                                        title={t('common:register')}
                                        uppercase
                                        onPress={() => handleSubmit()}
                                    />
                                </View>
                                <View style={styles.socialContainer}>
                                    <Socials spacing={5} loginOrRegisterText={t('common:registerWithSocials')} />
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </AppContainer>
    );
}


export default ErrorBoundary(Register);