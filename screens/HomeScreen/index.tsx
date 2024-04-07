/**
 * HomeScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableHighlight, Dimensions, Pressable, Image } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Button, Text, useTheme } from '@rneui/themed';
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import ProductCard from '../../components/ProductCard';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MaterialIcons } from "@expo/vector-icons";
import { products } from '../../data/seed';
import { data } from '../../data/newData';
import ProductItem from '../../components/ProductItem/ProductItem';
import { addressesList, Address } from '../../data/addressData';
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, AntDesign } from "@expo/vector-icons";
import { categoriesData } from '../../data/categoriesData';
import { categories } from '../../data/seed';
import { images } from '../../constants';
// import { bannerImages } from '../../data/bannerImage';
import { TAB_BAR_HEIGHT } from '../../constants';
import { product } from '../../data/type';

function filterDisplayData(data: product[]) {
    return data.map((item) => {
        if (item.images.length === 0) {
            item.images.push(require("../../assets/products/unknown.png"));
        }
        return {
            title: item.name,
            price: item.price,
            image: item.images[0],
            rating: {
                rate: item.rating,
                count: 1,
            },
            sales: item.sales,
        };
    });
}


const Home = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const sixtyFivePercentOfScreenHeight = screenHeight * 1;
    const [modalVisible, setModalVisible] = useState(false);
    const [addresses, setAddresses] = useState(addressesList);
    const [selectedAddress, setSelectedAdress] = useState<Address | null>(addressesList[0]);

    useEffect(() => {
        console.log("modal visible", modalVisible);
    },[modalVisible]);


    const newProduct = filterDisplayData(products.filter(product => product.tagIDs.includes(2)));
    const flashSaleProduct = filterDisplayData(products.filter(product => product.tagIDs.includes(1)));

    return (
        <View
            style={{
                backgroundColor: "white",
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    height: sixtyFivePercentOfScreenHeight,
                    paddingBottom: TAB_BAR_HEIGHT
                }}
            >
                <View
                    style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}
                >
                    {/* <ImageBackground source={banner.image} resizeMode="cover" style={styles().image}>
                        <Text style={styles().text}>{banner.text}</Text>
                        <Button
                            size="sm"
                            title={banner.buttonText}
                            onPress={() => { }}
                            containerStyle={styles().button}
                        />
                    </ImageBackground> */}
                    <SearchBar />
                    {/* chọn địa chỉ giao hàng */}
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            padding: 10,
                            backgroundColor: "white",
                        }}
                    >
                        <Ionicons name="location-outline" size={24} color="black" />

                        <Pressable>
                            {selectedAddress ? (
                                <Text>
                                    Giao tới {selectedAddress?.name} - {selectedAddress?.street}
                                </Text>
                            ) : (
                                <Text style={{ fontSize: 13, fontWeight: "500" }}>
                                    Chọn địa chỉ giao hàng
                                </Text>
                            )}
                        </Pressable>

                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </Pressable>
                    {/* kết thúc chọn địa chỉ giao hàng */}
                    <ScrollView>
                        <SliderBox
                            images={[images.image1, images.image2, images.image3]}
                            autoPlay
                            circleLoop
                            dotColor={"#13274F"}
                            inactiveDotColor="#90A4AE"
                            ImageComponentStyle={{ width: screenWidth, height: screenWidth *9/20}}
                        />
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {categories.map((item, index) => (
                                <Pressable
                                    key={index}
                                    style={{
                                        margin: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        style={{ width: 50, height: 50, resizeMode: "contain" }}
                                        source={item?.image}
                                    />

                                    <Text
                                        style={{
                                            textAlign: "center",
                                            fontSize: 12,
                                            fontWeight: "500",
                                            marginTop: 5,
                                        }}
                                    >
                                        {item?.name}
                                    </Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                        <View style={styles().titleContainer}>
                            <View>
                                <Text h1>{t('common:flashSale')}</Text>
                                <Text h3 style={styles().subTitle}>{t('common:homeSubTitle')}</Text>
                            </View>
                            <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate(t('Shop'))}>
                                <Text h3>{t('common:viewAll')}</Text>
                            </TouchableHighlight>
                        </View>
                        <ScrollView horizontal>
                            <View style={styles().productContainer}>
                                {flashSaleProduct && flashSaleProduct.map((product, index) => (
                                    <ProductItem key={index} item={product} />
                                ))}
                            </View>
                        </ScrollView>
                        <View style={styles().titleContainer}>
                            <View>
                                <Text h1>{t('common:new')}</Text>
                                <Text h3 style={styles().subTitle}>{t('common:homeSubTitle')}</Text>
                            </View>
                            <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate(t('Shop'))}>
                                <Text h3>{t('common:viewAll')}</Text>
                            </TouchableHighlight>
                        </View>
                        <ScrollView horizontal>
                            <View style={styles().productContainer}>
                                {newProduct && newProduct.map((product, index) => (
                                    <ProductItem key={index} item={product} />
                                ))}
                            </View>
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>

            {
                modalVisible ? (
                    <BottomModal
                        onBackdropPress={() => setModalVisible(!modalVisible)}
                        swipeDirection={["up", "down"]}
                        swipeThreshold={200}
                        modalAnimation={
                            new SlideAnimation({
                                slideFrom: "bottom",
                            })
                        }
                        onHardwareBackPress={() => setModalVisible(!modalVisible)}
                        visible={modalVisible}
                        onTouchOutside={() => setModalVisible(!modalVisible)}
                    >
                        <ModalContent style={{ width: "100%", height: 400 }}>
                            <View style={{ marginBottom: 8 }}>
                                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                                    Choose your Location
                                </Text>

                                <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
                                    Select a delivery location to see product availabilty and delivery
                                    options
                                </Text>
                            </View>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {/* already added addresses */}
                                {addresses?.map((item, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => setSelectedAdress(item)}
                                        style={{
                                            width: 140,
                                            height: 140,
                                            borderColor: "#D0D0D0",
                                            borderWidth: 1,
                                            padding: 10,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: 3,
                                            marginRight: 15,
                                            marginTop: 10,
                                            backgroundColor: selectedAddress === item ? "#FBCEB1" : "white"
                                        }}
                                    >
                                        <View
                                            style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                                        >
                                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                                {item?.name}
                                            </Text>
                                            <Entypo name="location-pin" size={24} color="red" />
                                        </View>

                                        <Text
                                            numberOfLines={1}
                                            style={{ width: 130, fontSize: 13, textAlign: "center" }}
                                        >
                                            {item?.houseNo},{item?.landmark}
                                        </Text>

                                        <Text
                                            numberOfLines={1}
                                            style={{ width: 130, fontSize: 13, textAlign: "center" }}
                                        >
                                            {item?.street}
                                        </Text>
                                        <Text
                                            numberOfLines={1}
                                            style={{ width: 130, fontSize: 13, textAlign: "center" }}
                                        >
                                            India, Bangalore
                                        </Text>
                                    </Pressable>
                                ))}

                                <Pressable
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigation.navigate("Address");
                                    }}
                                    style={{
                                        width: 140,
                                        height: 140,
                                        borderColor: "#D0D0D0",
                                        marginTop: 10,
                                        borderWidth: 1,
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            color: "#0066b2",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Add an Address or pick-up point
                                    </Text>
                                </Pressable>
                            </ScrollView>

                            <View style={{ flexDirection: "column", gap: 7, marginBottom: 30 }}>
                                <View
                                    style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                                >
                                    <Entypo name="location-pin" size={22} color="#0066b2" />
                                    <Text style={{ color: "#0066b2", fontWeight: "400" }}>
                                        Enter an Indian pincode
                                    </Text>
                                </View>

                                <View
                                    style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                                >
                                    <Ionicons name="locate-sharp" size={22} color="#0066b2" />
                                    <Text style={{ color: "#0066b2", fontWeight: "400" }}>
                                        Use My Currect location
                                    </Text>
                                </View>

                                <View
                                    style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                                >
                                    <AntDesign name="earth" size={22} color="#0066b2" />

                                    <Text style={{ color: "#0066b2", fontWeight: "400" }}>
                                        Deliver outside India
                                    </Text>
                                </View>
                            </View>
                        </ModalContent>
                    </BottomModal>) : null
            }
        </View>
    );
}


export default ErrorBoundary(Home);