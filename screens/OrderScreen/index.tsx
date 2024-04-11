/**
 * ShopScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React, { useState, Dispatch, useEffect, useRef } from 'react';
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
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';



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
    const [displayOrders, setDisplayOrders] = useState([]);

    useEffect(() => {
        console.log("tagId da chon: ", statusOrders[index].id)
        const filteredProducts = orders.filter((order) => (order.statusId === statusOrders[index].id))
        setDisplayOrders(filteredProducts);
    }, [index])


    useEffect(() => {
        console.log("displayOrders: ", displayOrders)
    }, [displayOrders])


    return (
        <AppContainer>
            <Tab items={statusOrders} index={index} setIndex={setIndex} />
            <GestureHandlerRootView>
                <ScrollView>


                </ScrollView>
            </GestureHandlerRootView>

        </AppContainer>
    );
}


export default ErrorBoundary(Shop);