type product = {
    name: string;
    price: number;
    categoryIDs: number[];
    tagIDs: number[];
    images: string[];
    rating: number;
    discount: number;
    sales: number;
}

type tag = {
    name: string;
    id: number;
}

type category = {
    name: string;
    id: number;
}

export {product, tag, category}