/**
 * ProductCard.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */

import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Badge, Icon, Text, useTheme } from '@rneui/themed';
import { scale, verticalScale } from "react-native-size-matters";
import { styles } from './styles';
import { DisplayProductProp } from './displayProductProp';

// type ProductCardProps = {
//     image?: any;
//     imageStyle?: { [key: string]: any };
//     label?: string;
//     badgeStyle?: { [key: string]: any };
//     buttonStyle?: { [key: string]: any };
//     ratingValue?: number;
//     ratingCount?: number;
//     totalRating?: number;
//     ratingSize?: number;
//     salePrice?: number;
//     price: number;
//     currency?: string;
//     category: string;
//     name: string;
//     imageWidth?: number;
//     imageHeight?: number;
//     button?: {
//         iconName?: string;
//         iconType?: string;
//         iconColor?: string;
//         iconSize?: number;
//     };
//     onPress?: () => void;
// };

const ProductCard = (props: DisplayProductProp) => {
    const { theme } = useTheme();
    const {
        name,
        price,
        image,
    } = props;

    const imageWidth = props.imageStyle ? props.imageStyle.width : 150;
    const imageHeight = props.imageStyle ? props.imageStyle.height : 150;
    const imageStyle = props.imageStyle ? props.imageStyle : {};
    const tag = props.tag ? props.tag : "";
    const badgeStyle = props.badgeStyle ? props.badgeStyle : {};
    const imageSource = image ? image : require('../../assets/products/unknown.png');
    const currency = "đ";
    const salePrice = props.price;
    const ratingCount = 5;
    const totalRating = 20;
    const ratingSize = 15;
    const ratingValue = 5;
    function handleTouch() {() => { console.log('hello') } }

    return (
        <View style={[styles(imageWidth).container]}>
            <View style={styles(imageWidth).imageContainer} >
                <TouchableOpacity onPress={handleTouch}>
                    <Image source={imageSource} resizeMode="cover" style={[styles(imageWidth).image, imageStyle, { height: verticalScale(imageHeight) }]} />

                    {
                        /*
                         * Tag cho sản phẩm
                        */
                    }
                    <Badge
                        status="primary"
                        value={tag ? tag : ""}
                        containerStyle={{ position: 'absolute', top: 10, left: 8 }}
                        badgeStyle={[tag && { backgroundColor: "#000", borderColor: 'transparent', borderRadius: 25, paddingHorizontal: 2, height: 24 }, badgeStyle]}
                        textStyle={{ fontSize: 11, fontWeight: "700" }}
                    />

                    {
                        /**
                         * Icon trái tim cho sản phẩm
                         * TODO: Triển khai Favorite cho sản phẩm
                         */
                    }
                    {/* <Icon
                        raised
                        name={button.iconName}
                        type={button.iconType}
                        color={button.iconColor}
                        size={button.iconSize}
                        containerStyle={[{ position: 'absolute', bottom: -20, right: -10, backgroundColor: '#fff' }, buttonStyle]}
                        onPress={() => console.log('hello')} /> */}
                </TouchableOpacity>
            </View>

            <View style={styles().productInfo}>
                <View style={styles().star}>
                    {(() => {
                        let rating = [];
                        for (let i = 1; i <= ratingCount; i++) {
                            if (i <= ratingValue) {
                                rating.push(<Icon key={i} name="star" type="ionicons" color={theme.colors.warning} size={ratingSize} />);
                            } else {
                                rating.push(<Icon key={i} name="star-outline" type="ionicons" color={theme.colors.grey0} size={ratingSize} />);
                            }
                        }
                        return rating;
                    })()}
                    <Text h4>({totalRating})</Text>
                </View>

                {/* <Text style={styles().text} h4>{category}</Text> */}
                <Text style={styles().text}>{name}</Text>
                <View style={styles().priceContainer}>
                    <Text style={[styles().price, salePrice && { textDecorationLine: 'line-through', }]}>{price}{currency}</Text>
                    {salePrice && <Text style={styles().salePrice}>{salePrice}{currency}</Text>}
                </View>
            </View>

        </View>
    );
}


export default ProductCard;