/**
 * HomeScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React from 'react';
import { ScrollView, View, ImageBackground, TouchableHighlight, Dimensions } from 'react-native';
import { Button, Text, useTheme } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import ProductCard from '../../components/ProductCard';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import { banner } from "../../data";
import { products } from '../../data/seed';
import { data } from '../../data/newData';
import ProductItem from '../../components/ProductItem/ProductItem';

const Home = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const screenHeight = Dimensions.get('window').height;
    const sixtyFivePercentOfScreenHeight = screenHeight * 0.67;

    return (
        <ScrollView>
            <View style={styles().container}>
                <View style={styles(sixtyFivePercentOfScreenHeight).imageContainer}>
                    <ImageBackground source={banner.image} resizeMode="cover" style={styles().image}>
                        <Text style={styles().text}>{banner.text}</Text>
                        <Button
                            size="sm"
                            title={banner.buttonText}
                            onPress={() => { }}
                            containerStyle={styles().button}
                        />
                    </ImageBackground>
                </View>
                <View style={styles().titleContainer}>
                    <View>
                        <Text h1>{t('common:suggested')}</Text>
                        <Text h3 style={styles().subTitle}>{t('common:homeSubTitle')}</Text>
                    </View>
                    <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate(t('common:shop'))}>
                        <Text h3>{t('common:viewAll')}</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView horizontal>
                    <View style={styles().productContainer}>
                        {products && products.map((product, index) => (
                            <ProductCard
                                key={index}
                                category={product.categoryId}
                                name={product.name}
                                ratingValue={product.ratingValue}
                                totalRating={product.totalRating}
                                price={product.price}
                                salePrice={product.salePrice}
                                image={product.image}
                                buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                                // label="NEW"
                            />
                        ))}
                    </View>
                </ScrollView>
                <View style={styles().titleContainer}>
                    <View>
                        <Text h1>{t('common:new')}</Text>
                        <Text h3 style={styles().subTitle}>{t('common:homeSubTitle')}</Text>
                    </View>
                    <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate(t('common:shop'))}>
                        <Text h3>{t('common:viewAll')}</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView horizontal>
                    <View style={styles().productContainer}>
                        {data && data.map((product, index) => (
                            <ProductItem key={index} item={product}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}


export default ErrorBoundary(Home);