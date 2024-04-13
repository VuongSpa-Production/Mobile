import { images } from "../constants";
import { product, tag, category, order, statusOrder } from "./type";

const tags: tag[] = [
    {
        name: "Flash Sale",
        id: 1
    },
    {
        name: "Mới",
        id: 2
    },
    {
        name: "Bán chạy",
        id: 3
    },
    {
        name: "Tất cả",
        id: 4
    }
]

const statusOrders: statusOrder[] = [
    {
        name: "Chờ xác nhận",
        id: 1
    },
    {
        name: "Chờ lấy hàng",
        id: 2
    },
    {
        name: "Đang giao hàng",
        id: 3
    },
    {
        name: "Đã giao",
        id: 4
    },
    {
        name: "Đã hủy",
        id: 5
    },
    {
        name: "Trả hàng",
        id: 6
    },
]
const orders: order[] = [
    {
        id: 0,
        orderDate: "2024-03-25",
        total: 0,
        statusId: 5,
        products: [1, 2, 7, 12, 23]
    },
    {
        id: 1,
        orderDate: "2024-03-25",
        total: 2800000,
        statusId: 4,
        products: [3, 4, 10, 18, 21]
    },
    {
        id: 2,
        orderDate: "2024-03-23",
        total: 3700000,
        statusId: 6,
        products: [2, 5, 9, 11]
    },
    {
        id: 3,
        orderDate: "2024-03-20",
        total: 2200000,
        statusId: 2,
        products: [8, 13, 15]
    },
    {
        id: 4,
        orderDate: "2024-03-18",
        total: 1900000,
        statusId: 3,
        products: [1, 6, 16, 20, 25]
    },
    {
        id: 5,
        orderDate: "2024-03-15",
        total: 3300000,
        statusId: 4,
        products: [14, 17, 19, 22, 26]
    },
    // Thêm các đơn hàng khác tương tự ở đây
    {
        id: 6,
        orderDate: "2024-03-12",
        total: 4500000,
        statusId: 1,
        products: [12, 23, 29]
    },
    {
        id: 7,
        orderDate: "2024-03-10",
        total: 2100000,
        statusId: 2,
        products: [3, 7, 11, 24]
    },
    {
        id: 8,
        orderDate: "2024-03-08",
        total: 3000000,
        statusId: 1,
        products: [2, 5, 10, 18, 21]
    },
    {
        id: 9,
        orderDate: "2024-03-05",
        total: 2600000,
        statusId: 3,
        products: [1, 6, 16, 20, 25]
    },
    {
        id: 10,
        orderDate: "2024-03-03",
        total: 2800000,
        statusId: 4,
        products: [14, 17, 19, 22, 26]
    },
    {
        id: 11,
        orderDate: "2024-02-29",
        total: 3700000,
        statusId: 1,
        products: [12, 23, 29]
    },
    {
        id: 12,
        orderDate: "2024-02-27",
        total: 2200000,
        statusId: 2,
        products: [3, 7, 11, 24]
    },
    {
        id: 13,
        orderDate: "2024-02-24",
        total: 1900000,
        statusId: 2,
        products: [1, 6, 16, 20, 25]
    },
    {
        id: 14,
        orderDate: "2024-02-22",
        total: 3300000,
        statusId: 3,
        products: [14, 17, 19, 22, 26]
    },
    {
        id: 15,
        orderDate: "2024-02-19",
        total: 4500000,
        statusId: 4,
        products: [12, 23, 29]
    },
    {
        id: 16,
        orderDate: "2024-02-17",
        total: 2100000,
        statusId: 1,
        products: [3, 7, 11, 24]
    },
    {
        id: 17,
        orderDate: "2024-02-14",
        total: 3000000,
        statusId: 2,
        products: [2, 5, 10, 18, 21]
    },
    {
        id: 18,
        orderDate: "2024-02-12",
        total: 2600000,
        statusId: 2,
        products: [1, 6, 16, 20, 25]
    },
    {
        id: 19,
        orderDate: "2024-02-09",
        total: 2800000,
        statusId: 3,
        products: [14, 17, 19, 22, 26]
    },
    {
        id: 20,
        orderDate: "2024-02-07",
        total: 3700000,
        statusId: 4,
        products: [12, 23, 29]
    },
]
const categories: category[] = [
    {
        name: "Máy khoan",
        image: images.product11,
        id: 1
    },
    {
        name: "Máy cắt",
        image: images.product3,
        id: 2
    },
    {
        name: "Máy mài",
        image: images.product4,
        id: 3
    },
    {
        name: "Máy hàn",
        image: images.product5,
        id: 4
    },
    {
        name: "Máy xay",
        image: images.product6,
        id: 5
    },
    {
        name: "Phụ kiện",
        image: images.product7,
        id: 6
    },
    {
        name: "Khác",
        image: images.product8,
        id: 7
    }
]

const products: product[] = [
    {
        "id": 1,
        "name": "Máy Đánh Giấy Ráp Rung DongCheng DSB185",
        "price": 300000,
        "categoryIDs": [1],
        "tagIDs": [1,2],
        "images": [images.product1],
        "rating": 3,
        "discount": 0,
        "sales": 10
    },
    {
        "id": 2,
        "name": "Máy Khoan Bosch GSB 13 RE",
        "price": 1500000,
        "categoryIDs": [1],
        "tagIDs": [2],
        "images": [images.product2],
        "rating": 4,
        "discount": 0,
        "sales": 20
    },
    {
        "id": 3,
        "name": "Máy Cắt Cầm Tay Makita 9557NB",
        "price": 1200000,
        "categoryIDs": [2],
        "tagIDs": [1],
        "images": [images.product3],
        "rating": 4.5,
        "discount": 0,
        "sales": 15
    },
    {
        "id": 4,
        "name": "Máy Mài Góc Hitachi G10SS2",
        "price": 800000,
        "categoryIDs": [3],
        "tagIDs": [2],
        "images": [images.product4],
        "rating": 3.8,
        "discount": 0,
        "sales": 12
    },
    {
        "id": 5,
        "name": "Máy Hàn Que Hyundai MMA-140",
        "price": 2000000,
        "categoryIDs": [4],
        "tagIDs": [1,3],
        "images": [images.product5],
        "rating": 4.2,
        "discount": 0,
        "sales": 18
    },
    {
        "id": 6,
        "name": "Máy Cưa Đĩa Makita 5806B",
        "price": 1800000,
        "categoryIDs": [5],
        "tagIDs": [2],
        "images": [images.product6],
        "rating": 4.3,
        "discount": 0,
        "sales": 22
    },
    {
        "id": 7,
        "name": "Máy Xay Bosch MMBM7G3M",
        "price": 700000,
        "categoryIDs": [6],
        "tagIDs": [1,3],
        "images": [images.product7],
        "rating": 3.5,
        "discount": 0,
        "sales": 9
    },
    {
        "id": 8,
        "name": "Bộ Phụ Kiện Máy Khoan 20 mảnh",
        "price": 300000,
        "categoryIDs": [7],
        "tagIDs": [2],
        "images": [images.product8],
        "rating": 4,
        "discount": 0,
        "sales": 25
    },
    {
        "id": 9,
        "name": "Máy Thổi Khí Mini Handy",
        "price": 500000,
        "categoryIDs": [8],
        "tagIDs": [1,3],
        "images": [images.product9],
        "rating": 3.7,
        "discount": 0,
        "sales": 14
    },
    {
        "id": 10,
        "name": "Máy Phun Sơn Kỹ Thuật Số",
        "price": 2500000,
        "categoryIDs": [8],
        "tagIDs": [2],
        "images": [images.product10],
        "rating": 4.6,
        "discount": 0,
        "sales": 30
    },
    {
        "id": 11,
        "name": "Máy Khoan Địa Bosch GBM 13 HRE",
        "price": 1600000,
        "categoryIDs": [1],
        "tagIDs": [1],
        "images": [images.product11],
        "rating": 4.2,
        "discount": 0,
        "sales": 18
    },
    {
        "id": 12,
        "name": "Máy Cắt Sắt Makita LC1230",
        "price": 2200000,
        "categoryIDs": [2],
        "tagIDs": [2],
        "images": [images.product12],
        "rating": 4.4,
        "discount": 0,
        "sales": 23
    },
    {
        "id": 13,
        "name": "Máy Mài Góc Bosch GWS 7-100",
        "price": 900000,
        "categoryIDs": [3],
        "tagIDs": [1,3],
        "images": [images.product13],
        "rating": 4,
        "discount": 0,
        "sales": 16
    },
    {
        "id": 14,
        "name": "Máy Hàn TIG Lincoln Electric TIG 200 AC/DC",
        "price": 3500000,
        "categoryIDs": [4],
        "tagIDs": [2],
        "images": [images.product14],
        "rating": 4.8,
        "discount": 0,
        "sales": 28
    },
    {
        "id": 15,
        "name": "Máy Cưa Bàn Bosch GTS 10 XC",
        "price": 2800000,
        "categoryIDs": [5],
        "tagIDs": [1],
        "images": [images.product15],
        "rating": 4.6,
        "discount": 0,
        "sales": 26
    },
    {
        "id": 16,
        "name": "Máy Xay Cà Phê Cầm Tay",
        "price": 600000,
        "categoryIDs": [6],
        "tagIDs": [2],
        "images": [],
        "rating": 3.9,
        "discount": 0,
        "sales": 13
    },
    {
        "id": 17,
        "name": "Bộ Phụ Kiện Máy Cắt 30 Mảnh",
        "price": 400000,
        "categoryIDs": [7],
        "tagIDs": [1],
        "images": [],
        "rating": 4.1,
        "discount": 0,
        "sales": 20
    },
    {
        "id": 18,
        "name": "Máy Thổi Khí Tự Động",
        "price": 750000,
        "categoryIDs": [8],
        "tagIDs": [2],
        "images": [],
        "rating": 4.3,
        "discount": 0,
        "sales": 24
    },
    {
        "id": 19,
        "name": "Máy Phun Sơn Điện Tử Mini",
        "price": 2800000,
        "categoryIDs": [8],
        "tagIDs": [1],
        "images": [],
        "rating": 4.5,
        "discount": 0,
        "sales": 29
    },
    {
        "id": 20,
        "name": "Máy Khoan Pin Black+Decker BDCDD12",
        "price": 800000,
        "categoryIDs": [1],
        "tagIDs": [2],
        "images": [],
        "rating": 3.8,
        "discount": 0,
        "sales": 17
    },
    {
        "id": 21,
        "name": "Máy Cắt Góc DeWalt DWE4057",
        "price": 1100000,
        "categoryIDs": [2],
        "tagIDs": [1],
        "images": [],
        "rating": 4.1,
        "discount": 0,
        "sales": 21
    },
    {
        "id": 22,
        "name": "Máy Mài Góc Milwaukee AGV 15-125 XSPDE",
        "price": 950000,
        "categoryIDs": [3],
        "tagIDs": [2],
        "images": [],
        "rating": 4.2,
        "discount": 0,
        "sales": 19
    },
    {
        "id": 23,
        "name": "Máy Hàn MIG Lincoln Electric Power MIG 180C",
        "price": 3000000,
        "categoryIDs": [4],
        "tagIDs": [1],
        "images": [],
        "rating": 4.7,
        "discount": 0,
        "sales": 27
    },
    {
        "id": 24,
        "name": "Máy Cưa Đĩa Makita 5903RK",
        "price": 2300000,
        "categoryIDs": [5],
        "tagIDs": [2],
        "images": [],
        "rating": 4.5,
        "discount": 0,
        "sales": 25
    },
    {
        "id": 25,
        "name": "Máy Xay Sinh Tố Philips HR2115",
        "price": 650000,
        "categoryIDs": [6],
        "tagIDs": [1],
        "images": [],
        "rating": 4,
        "discount": 0,
        "sales": 15
    },
    {
        "id": 26,
        "name": "Bộ Phụ Kiện Máy Khoan 25 Mảnh",
        "price": 350000,
        "categoryIDs": [7],
        "tagIDs": [2],
        "images": [],
        "rating": 3.9,
        "discount": 0,
        "sales": 22
    },
    {
        "id": 27,
        "name": "Máy Thổi Khí Đa Năng",
        "price": 700000,
        "categoryIDs": [8],
        "tagIDs": [1],
        "images": [],
        "rating": 4.2,
        "discount": 0,
        "sales": 18
    },
    {
        "id": 28,
        "name": "Máy Phun Sơn Điện Tử Mini 2",
        "price": 3000000,
        "categoryIDs": [8],
        "tagIDs": [2],
        "images": [],
        "rating": 4.8,
        "discount": 0,
        "sales": 30
    },
    {
        "id": 29,
        "name": "Máy Khoan Đặt Sàn Makita FS2700",
        "price": 1700000,
        "categoryIDs": [1],
        "tagIDs": [1],
        "images": [],
        "rating": 4.3,
        "discount": 0,
        "sales": 24
    }
]

export { products, tags, categories,orders,statusOrders }