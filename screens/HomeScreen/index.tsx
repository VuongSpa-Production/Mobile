/**
 * HomeScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableHighlight, Dimensions, Pressable } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Button, Text, useTheme } from '@rneui/themed';
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import ProductCard from '../../components/ProductCard';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MaterialIcons } from "@expo/vector-icons";
import { banner } from "../../data";
import { products } from '../../data/seed';
import { data } from '../../data/newData';
import ProductItem from '../../components/ProductItem/ProductItem';
import { addressesList, Address } from '../../data/addressData';
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, AntDesign } from "@expo/vector-icons";
// import { bannerImages } from '../../data/bannerImage';


const Home = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const screenHeight = Dimensions.get('window').height;
    const sixtyFivePercentOfScreenHeight = screenHeight * 0.5;
    const [modalVisible, setModalVisible] = useState(false);
    const [addresses, setAddresses] = useState(addressesList);
    const [selectedAddress, setSelectedAdress] = useState<Address | null>(addressesList[0]);
    const bannerImages = [
        "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
    ];

    useEffect(() => {
        console.log("modal visible", modalVisible);
    }
        , [modalVisible]);

    return (
        <View>
            <ScrollView>
                <View style={styles().container}>
                    <View style={styles(sixtyFivePercentOfScreenHeight).imageContainer}>
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
                        <SliderBox
                            images={bannerImages}
                            autoPlay
                            circleLoop
                            dotColor={"#13274F"}
                            inactiveDotColor="#90A4AE"
                            ImageComponentStyle={{ width: "100%" }}
                        />
                    </View>
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
                            {/* {products && products
                            .filter(product => product.tagIDs.includes(2))
                            .map((product, index) => (
                                <ProductCard
                                    key={index}
                                    // category={product.categoryIDs}
                                    name={product.name}
                                    ratingValue={product.ratingValue}
                                    totalRating={product.totalRating}
                                    price={product.price}
                                    salePrice={product.salePrice}
                                    image={product.image}
                                    buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                                // label="NEW"
                                />
                            ))} */}
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
                            {data && data.map((product, index) => (
                                <ProductItem key={index} item={product} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

            <SliderBox
                images={bannerImages}
                autoPlay
                circleLoop
                dotColor={"#13274F"}
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{ width: "100%" }}
            />

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