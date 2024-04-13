import { ImageSourcePropType } from "react-native";

type product = {
    name: string;
    price: number;
    categoryIDs: number[];
    tagIDs: number[];
    images: ImageSourcePropType[];
    rating: number;
    discount: number;
    sales: number;
}

type tag = {
    name: string;
    id: number;
}
type statusOrder = {
    name: string;
    id: number;
}
type order = {
    id: number;
    orderDate: string;
    total: number;
    statusId: statusOrder["id"];
    products: product[];
}

type category = {
    name: string;
    image: ImageSourcePropType; // có thể để any nhưng để ntn để biết phải require
    //TODO: chấp nhận nhiều kiểu source
    id: number;
}

type authData = {
    email: string;
    password: string;
}

type signUpData = {
    name: string;
    email: string;
    password: string;
}

export {product, tag, category, order, statusOrder, authData, signUpData}