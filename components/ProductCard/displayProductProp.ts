export type DisplayProductProp = {
    name: string;
    image: string;
    price: number;

    tag ?: string;
    category ?: string;
    discount ?: number;
    rateCount ?: number;
    salesCount ?: number;   
    imageStyle ?: { [key: string]: any };
    badgeStyle ?: { [key: string]: any };
    buttonStyle ?: { [key: string]: any };
};