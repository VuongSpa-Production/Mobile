/**
 * ShopScreen.tsx
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */

import React, { useState, Dispatch, useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { styles } from "./styles";
import Tab from "../../components/Tab";
import TabView from "../../components/TabView";
import ErrorBoundary from "../../components/HOC/ErrorBoundary";
import AppContainer from "../../components/HOC/AppContainer";
// import { categories, categoryBanner, products } from "../../data";
import { categories, products, tags } from "../../data/seed";
import { HEADER_HEIGHT } from "../../constants";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/productSlice";
import CategoryScreen from "../CategoryScreen";
import ProductCard from "../../components/ProductCard";
import { useTheme } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import ProductItem from "../../components/ProductItem/ProductItem";
import { product } from "../../data/type";
import { filterBasicProductData } from "../../utils/productDataProcess";

function filteredProducts(data: product[]) {
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

const Shop = ({ navigation }) => {
  const { theme } = useTheme();
  const dispatch: Dispatch<any> = useDispatch();
  const screenWidth = Dimensions.get("window").width - scale(20);
  const screenHeight = verticalScale(100);
  const [index, setIndex] = useState(0);
  // maintain: trạng thái khởi tạo của displayProducts có thể bug
  const [displayProducts, setDisplayProduct] = useState(null);

  const updateCategory = (catgeory: string) => {
    dispatch(changeCategory(catgeory));
    navigation.navigate("Category", { category: catgeory });
  };

  useEffect(() => {
    let filterProducts = [];
    console.log("tagId da chon: ", tags[index].id);
    if (tags[index].id === 4) {
      filterProducts = products;
    } else {
      filterProducts = products.filter((product) =>
        product.tagIDs.includes(tags[index].id)
      );
    }
    setDisplayProduct(filteredProducts(filterProducts));
  }, [index]);

  useEffect(() => {
    console.log("displayProducts: ", displayProducts);
  }, [displayProducts]);

  return (
    <AppContainer>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        {/**
         * Gốc có marginTop là HEADER_HEIGHT, lưu ý style sau này có thể thêm lại
         */}
        <View style={{ marginTop: 0 }}>
          <Tab items={tags} index={index} setIndex={setIndex} />

          {/* banner cho quảng cáo */}
          {/* <View style={[styles.banner, { width: screenWidth, height: screenHeight }]}>
                    <Text style={styles.title}>{categoryBanner.title}</Text>
                    <Text style={styles.subText}>{categoryBanner.subTitle}</Text>
                </View> */}

          {/**
           * Component cũ để hiển thị các subcategories
           */}
          {/* <TabView 
                    items={categories} 
                    index={index} 
                    setIndex={setIndex} 
                    onPress={(category) => updateCategory(category)} 
                /> */}
          {/* cách hiển thị cũ */}
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
                            source={product.images}
                            buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                            imageWidth={155}
                            imageHeight={160}
                            label={product.discount}
                            badgeStyle={product.discount && { backgroundColor: theme.colors.error }}
                        />
                    ))}
                </View> */}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {displayProducts &&
            displayProducts.map((product, index) => (
              <ProductItem key={index} item={product} />
            ))}
        </View>
        {/* <CategoryScreen></CategoryScreen> */}
      </View>
    </AppContainer>
  );
};

export default ErrorBoundary(Shop);
