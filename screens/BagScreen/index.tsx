import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TextInput, Image, Pressable, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as _images from '../../constants/images'

type cartItem = {
    id: number,
    title: string,
    image: string,
    price: number,
    quantity: number
}

const cart: cartItem[] = [
    {
        id: 1,
        title: "Máy khoan pin 12V 2.0Ah DCD700C2",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu0cesquttzza1",
        price: 11.96,
        quantity: 2,
    },
    {
        id: 2,
        title: "Máy mài góc 4 inch 850W DWE8300S-B1",
        image: "https://down-vn.img.susercontent.com/file/cfda62dfde0a05b1f66f3f17139e65d5",
        price: 239,
        quantity: 3,
    },
    {
        id: 3,
        title: "Máy khoan mũi 13mm 710W DWD024K-B1",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltynofvpok5tf2",
        price: 199.99,
        quantity: 1,
    },
    {
        id: 4,
        title: "Máy cắt sắt 14 inch 2200W DW872-B1",
        image: "https://down-vn.img.susercontent.com/file/0d20c920b23e8fb2ca576aa5a25251a7",
        price: 98.99,
        quantity: 1,
    },
    {
        id: 5,
        title: "Máy cắt sắt 14 inch 2200W DW872-B1",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu1k2ittsw7zad",
        price: 598.99,
        quantity: 1,
    },
];

const decreaseQuantity = (item: cartItem) => {
    console.log("Decrease Quantity", item);
}

const increaseQuantity = (item: cartItem) => {
    console.log("Increase Quantity", item);
}

const deleteItem = (item: cartItem) => {
    console.log("Delete Item", item);
}

const Bag = () => {
    const insets = useSafeAreaInsets()
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white", marginTop: insets.top }}>
            <View
                style={{
                    backgroundColor: "#00CED1",
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
                    Giỏ hàng
                </Text>
            </View>
            {/* <View
                style={{
                    backgroundColor: "#00CED1",
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        borderRadius: 3,
                        height: 38,
                        flex: 1,
                    }}
                >
                    <AntDesign
                        style={{ paddingLeft: 10 }}
                        name="search1"
                        size={22}
                        color="black"
                    />
                    <TextInput placeholder="Search Amazon.in" />
                </Pressable>

                <Feather name="mic" size={24} color="black" />
            </View> */}

            <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>Số sản phẩm : </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{12345}</Text>
            </View>
            <Text style={{ marginHorizontal: 10 }}>Kiểm tra đơn hàng của bạn ở dưới đây</Text>

            <Pressable
                // onPress={() => navigation.navigate("Confirm")}
                onPress={() => console.log("Proceed to Buy")}
                style={{
                    backgroundColor: "#FFC72C",
                    padding: 10,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginTop: 10,
                }}
            >
                <Text>Tiến hành mua ({12345}) sản phẩm</Text>
            </Pressable>

            <Text
                style={{
                    height: 1,
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    marginTop: 16,
                }}
            />

            <View style={{ marginHorizontal: 10 }}>
                {cart?.map((item, index) => (
                    <View
                        style={{
                            backgroundColor: "white",
                            marginVertical: 10,
                            borderBottomColor: "#F0F0F0",
                            borderWidth: 2,
                            borderLeftWidth: 0,
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                        }}
                        key={index}
                    >
                        <Pressable
                            style={{
                                marginVertical: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <Image
                                    style={{ width: 140, height: 140, resizeMode: "contain" }}
                                    source={{ uri: item?.image }}
                                />
                            </View>

                            <View>
                                <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                                    {item?.title}
                                </Text>
                                <Text
                                    style={{ fontSize: 20, fontWeight: "bold", marginTop: 6 }}
                                >
                                    {item?.price}
                                </Text>
                                <Image
                                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                                    source={{
                                        uri: "https://down-bs-vn.img.susercontent.com/vn-11134216-7r98o-lq32ayjgo2xe65_tn.webp",
                                    }}
                                />
                                <Text style={{ color: "green" }}>Còn Hàng</Text>
                                {/* <Text style={{ fontWeight: "500", marginTop: 6 }}>
                      {item?.rating?.rate} ratings
                    </Text> */}
                            </View>
                        </Pressable>

                        <Pressable
                            style={{
                                marginTop: 15,
                                marginBottom: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 7,
                                }}
                            >
                                {item?.quantity > 1 ? (
                                    <Pressable
                                        onPress={() => decreaseQuantity(item)}
                                        style={{
                                            backgroundColor: "#D8D8D8",
                                            padding: 7,
                                            borderTopLeftRadius: 6,
                                            borderBottomLeftRadius: 6,
                                        }}
                                    >
                                        <AntDesign name="minus" size={24} color="black" />
                                    </Pressable>
                                ) : (
                                    <Pressable
                                        onPress={() => deleteItem(item)}
                                        style={{
                                            backgroundColor: "#D8D8D8",
                                            padding: 7,
                                            borderTopLeftRadius: 6,
                                            borderBottomLeftRadius: 6,
                                        }}
                                    >
                                        <AntDesign name="delete" size={24} color="black" />
                                    </Pressable>
                                )}

                                <Pressable
                                    style={{
                                        backgroundColor: "white",
                                        paddingHorizontal: 18,
                                        paddingVertical: 6,
                                    }}
                                >
                                    <Text>{item?.quantity}</Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => increaseQuantity(item)}
                                    style={{
                                        backgroundColor: "#D8D8D8",
                                        padding: 7,
                                        borderTopLeftRadius: 6,
                                        borderBottomLeftRadius: 6,
                                    }}
                                >
                                    <Feather name="plus" size={24} color="black" />
                                </Pressable>
                            </View>
                            <Pressable
                                onPress={() => deleteItem(item)}
                                style={{
                                    backgroundColor: "white",
                                    paddingHorizontal: 8,
                                    paddingVertical: 10,
                                    borderRadius: 5,
                                    borderColor: "#C0C0C0",
                                    borderWidth: 0.6,
                                }}
                            >
                                <Text>Xóa</Text>
                            </Pressable>
                        </Pressable>

                        <Pressable
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 15,
                            }}
                        >
                            {/* <Pressable
                                style={{
                                    backgroundColor: "white",
                                    paddingHorizontal: 8,
                                    paddingVertical: 10,
                                    borderRadius: 5,
                                    borderColor: "#C0C0C0",
                                    borderWidth: 0.6,
                                }}
                            >
                                <Text>Save For Later</Text>
                            </Pressable> */}

                            {/* <Pressable
                                style={{
                                    backgroundColor: "white",
                                    paddingHorizontal: 8,
                                    paddingVertical: 10,
                                    borderRadius: 5,
                                    borderColor: "#C0C0C0",
                                    borderWidth: 0.6,
                                }}
                            >
                                <Text>See More Like this</Text>
                            </Pressable> */}
                        </Pressable>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}


export default Bag;