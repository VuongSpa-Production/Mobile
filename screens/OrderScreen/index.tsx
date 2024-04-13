/**
 * ShopScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React, { useState, Dispatch, useEffect, useRef } from 'react';
import { View, Dimensions, Text, ScrollView } from 'react-native';
import { scale, verticalScale } from "react-native-size-matters";
import Tab from "../../components/Tab";
import TabView from "../../components/TabView";
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';
// import { categories, categoryBanner, products } from "../../data";
import { categories, products, tags, statusOrders, orders } from "../../data/seed";
import { HEADER_HEIGHT } from '../../constants';
import { useDispatch } from 'react-redux';
import { changeCategory } from "../../store/productSlice";
import CategoryScreen from '../CategoryScreen';
import { useTheme } from '@rneui/themed';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { products as productsList } from '../../data/seed';
import ProductOrder from '../../components/ProductItem/ProductOrder';

type DisplayProduct = {
    data: any;
}

function getProductItem(productID: number) {
    const found = productsList.find((product) => product.id === productID);
    if (found) {
        console.log("found: ", found)
        return {
            title: found.name,
            image: found.images[0],
            price: found.price,
        };
    } else {
        return {
            title: "unknonwnname",
            image: [],
            price: 0,
        };
    }
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
                    <View styles={styles.container}>
                        {displayOrders.map((order, index) => {
                            return (
                                <View key={index} style={styles.orderContainer}>
                                    <ScrollView horizontal>
                                        <View style={styles.productContainer}>
                                            {order && order.products.map((productID, index) => (
                                                <ProductOrder
                                                    key={index}
                                                    item={getProductItem(productID)}
                                                // navigation={navigation} 
                                                />
                                            ))}
                                        </View>
                                    </ScrollView>
                                    {/* <Text style={styles.orderText}>Order ID: {order.id}</Text> */}
                                    <Text style={styles.orderText}>Thời gian đặt hàng: {order.orderDate}</Text>
                                    <Text style={styles.orderText}>Tổng số tiền: {order.total}</Text>
                                </View>
                            )
                        })}
                    </View>

                </ScrollView>
            </GestureHandlerRootView>

        </AppContainer>
    );
}

const styles = {
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: HEADER_HEIGHT,
    },
    orderContainer: {
        width: "100%",
        backgroundColor: "white",
        marginVertical: verticalScale(10),
        padding: scale(10),
        borderRadius: scale(10),
        justifyContent: "space-around",
        alignItems: "flex-start",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    orderText: {
        fontSize: scale(12),
        color: "black",
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    }
}

export default ErrorBoundary(Shop);