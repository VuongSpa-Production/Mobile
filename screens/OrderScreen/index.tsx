/**
 * ShopScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React, { useState, Dispatch, useEffect } from 'react';
import {View, Dimensions, Text } from 'react-native';
import { scale, verticalScale } from "react-native-size-matters";
import { styles } from './styles';
import Tab from "../../components/Tab";
import TabView from "../../components/TabView";
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';
// import { categories, categoryBanner, products } from "../../data";
import { categories, products, tags, statusOrders,orders } from "../../data/seed";
import { HEADER_HEIGHT } from '../../constants';
import { useDispatch } from 'react-redux';
import { changeCategory } from "../../store/productSlice";
import CategoryScreen from '../CategoryScreen';
import ProductCard from '../../components/ProductCard';
import { useTheme } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';



type DisplayProduct = {
    data: any;
}

const Shop = ({ navigation }) => {
    const { theme } = useTheme();
    const dispatch: Dispatch<any> = useDispatch();
    const screenWidth = Dimensions.get("window").width - scale(20);
    const screenHeight = verticalScale(100);
    const [index, setIndex] = useState(0);
    // maintain: trạng thái khởi tạo của displayProducts có thể bug
    const [displayOrders, setDisplayOrders] = useState(null);

    useEffect(() => {
        console.log("tagId da chon: ", tags[index].id)
        const filteredProducts = orders.filter((order) => order.statusId === tags[index].id)
        setDisplayOrders(filteredProducts)
        
    }, [index])

    useEffect(() => {
        console.log("displayOrders: ", displayOrders)
    }, [displayOrders])


    return (
        <AppContainer>
            {/**
             * TODO: Gốc có marginTop là HEADER_HEIGHT, lưu ý style sau này có thể thêm lại
             */}
            <View style={{ marginTop: 0 }}>
                <Tab items={statusOrders} index={index} setIndex={setIndex} />

                {/* <View style={styles.productContainer}>
                    {displayProducts && displayProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            category={product.category}
                            name={product.name}
                            ratingValue={product.ratingValue}
                            totalRating={product.totalRating}
                            price={product.price}
                            salePrice={product.salePrice}
                            image={product.images}
                            buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                            imageWidth={155}
                            imageHeight={160}
                            label={product.discount}
                            badgeStyle={product.discount && { backgroundColor: theme.colors.error }}
                        />
                    ))}
                </View> */}
            </View>
        </AppContainer>
    );
}


export default ErrorBoundary(Shop);