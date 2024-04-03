import { images } from "../constants";


export const products = [{
    name: "Máy Đánh Giấy Ráp Rung DongCheng DSB185",
    categoryId: "new",
    ratingValue: 3,
    totalRating: 10,
    salePrice: 12,
    price: 15,
    currency: "$",
    image: images.product1
}, {
    name: "Men",
    categoryId: "bestSale",
    ratingValue: 5,
    totalRating: 2,
    salePrice: 22,
    price: 19,
    currency: "$",
    image: images.product2,
    discount: '-20%'
}, {
    name: "Sport Dress",
    categoryId: "allProducts",
    price: 14,
    currency: "$",
    image: images.product3
}, {
    name: "Light Blouse",
    categoryId: "allProducts",
    ratingValue: 4,
    totalRating: 50,
    price: 12,
    currency: "$",
    image: images.product3,
    discount: '-20%'
}]

export const banner = {
    image: images.bigBanner,
    text: "Fashion Sale",
    buttonText: "check"
}

export const visualSearchBanner = {
    image: images.visualBanner,
    text: "Search for an outfit by taking a photo or uploading an image",
}

export const categories = [
    {
        "name": "Sản phẩm mới",
        "categoryID": "new",
        "subcategories": [
        ]
    },
    {
        "name": "Bán chạy",
        "categoryID": "bestSale",
        "subcategories": [

        ]
    },
    {
        "name": "Tất cả sản phẩm",
        "categoryID": "allProducts",
        "subcategories": [{
            "name": "New",
            "image": images.image4
        },
        {
            "name": "Clothing",
            "image": images.image1
        },
        {
            "name": "Shoes",
            "image": images.image2
        },
        {
            "name": "Accessories",
            "image": images.image3
        },
        ]
    }
];

export const categoryBanner = {
    title: "Nhân dịp khai trương ",
    subTitle: "Up to 50% off"
}


export const sortItems = [{
    id: "popularity",
    name: "Popular"
}, {
    id: "newest",
    name: "Newest"
}, {
    id: "review",
    name: "Customer review"
}, {
    id: "asc",
    name: "Price: lowest to high"
}, {
    id: "desc",
    name: "Price: highest to low"
}]

export const colors = [{
    color: 'black',
    selected: true
},
{
    color: 'grey',
    selected: false
}, {
    color: 'red',
    selected: false
}, {
    color: 'green',
    selected: false
}, {
    color: 'gold',
    selected: true
},
{
    color: 'blue',
    selected: false
}];

export const sizes = [{
    size: 'XS',
    selected: false
},
{
    size: 'S',
    selected: true
}, {
    size: 'M',
    selected: true
}, {
    size: 'L',
    selected: false
}, {
    size: 'XL',
    selected: false
}];

export const productCategories = ["All", "Women", "Men", "Boys", "Girls"];
