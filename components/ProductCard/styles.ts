import { StyleSheet } from 'react-native';

export const styles = (width?) => StyleSheet.create({
    container: {
        flexBasis: '44%',
        borderRadius: 4,
        elevation: 1,
        width,
        shadowColor: "#777",
        shadowOffset: {
            height: 1,
            width: 0
        },
        marginHorizontal: 10,
        marginVertical: 10,
    },
    imageContainer: {
        width
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width
    },
    productInfo: {
        marginTop: 10,
        flexDirection: 'column',
    },
    star: {
        flexDirection: "row",
        alignContent: "center",
        marginHorizontal: 7
    },
    text: {
        marginTop: 2,
        fontSize: 14,
        fontWeight: "500",
        marginHorizontal: 10
    },
    priceContainer: {
        flexDirection: "row",
        marginLeft: 10,
    },
    price: {
        fontSize: 14,
        color: "#9B9B9B",
        marginRight: 3,
    },
    salePrice: {
        color: "#DB3022"
    }
});