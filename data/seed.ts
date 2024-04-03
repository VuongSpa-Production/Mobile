import { product, tag, category } from "./type";

const tags: tag[] = [
    {
        name: "Mới",
        id: 1
    },
    {
        name: "Bán chạy",
        id: 2
    }
]

const categories: category[] = [
    {
        name: "Máy khoan",
        id: 1
    },
    {
        name: "Máy cắt",
        id: 2
    },
    {
        name: "Máy mài",
        id: 3
    },
    {
        name: "Máy hàn",
        id: 4
    },
    {
        name: "Máy cưa",
        id: 5
    },
    {
        name: "Máy xay",
        id: 6
    },
    {
        name: "Phụ kiện",
        id: 7
    },
    {
        name: "Khác",
        id: 8
    }
]

const products: product[] = [
    {
        "name": "Máy Đánh Giấy Ráp Rung DongCheng DSB185",
        "price": 1000000,
        "categoryIDs": [1],
        "tagIDs": [1],
        "images": [],
        "rating": 3,
        "discount": 0,
        "sales": 10
    },
    {
        "name": "Máy Khoan Bosch GSB 13 RE",
        "price": 1500000,
        "categoryIDs": [1],
        "tagIDs": [2],
        "images": [],
        "rating": 4,
        "discount": 0,
        "sales": 20
    },
    {
        "name": "Máy Cắt Cầm Tay Makita 9557NB",
        "price": 1200000,
        "categoryIDs": [2],
        "tagIDs": [1],
        "images": [],
        "rating": 4.5,
        "discount": 0,
        "sales": 15
    },
    {
        "name": "Máy Mài Góc Hitachi G10SS2",
        "price": 800000,
        "categoryIDs": [3],
        "tagIDs": [2],
        "images": [],
        "rating": 3.8,
        "discount": 0,
        "sales": 12
    },
    {
        "name": "Máy Hàn Que Hyundai MMA-140",
        "price": 2000000,
        "categoryIDs": [4],
        "tagIDs": [1],
        "images": [],
        "rating": 4.2,
        "discount": 0,
        "sales": 18
    },
    {
        "name": "Máy Cưa Đĩa Makita 5806B",
        "price": 1800000,
        "categoryIDs": [5],
        "tagIDs": [2],
        "images": [],
        "rating": 4.3,
        "discount": 0,
        "sales": 22
    },
    {
        "name": "Máy Xay Bosch MMBM7G3M",
        "price": 700000,
        "categoryIDs": [6],
        "tagIDs": [1],
        "images": [],
        "rating": 3.5,
        "discount": 0,
        "sales": 9
    },
    {
        "name": "Bộ Phụ Kiện Máy Khoan 20 mảnh",
        "price": 300000,
        "categoryIDs": [7],
        "tagIDs": [2],
        "images": [],
        "rating": 4,
        "discount": 0,
        "sales": 25
    },
    {
        "name": "Máy Thổi Khí Mini Handy",
        "price": 500000,
        "categoryIDs": [8],
        "tagIDs": [1],
        "images": [],
        "rating": 3.7,
        "discount": 0,
        "sales": 14
    },
    {
        "name": "Máy Phun Sơn Kỹ Thuật Số",
        "price": 2500000,
        "categoryIDs": [8],
        "tagIDs": [2],
        "images": [],
        "rating": 4.6,
        "discount": 0,
        "sales": 30
    },
    {
        "name": "Máy Khoan Địa Bosch GBM 13 HRE",
        "price": 1600000,
        "categoryIDs": [1],
        "tagIDs": [1],
        "images": [],
        "rating": 4.2,
        "discount": 0,
        "sales": 18
    },
    {
        "name": "Máy Cắt Sắt Makita LC1230",
        "price": 2200000,
        "categoryIDs": [2],
        "tagIDs": [2],
        "images": [],
        "rating": 4.4,
        "discount": 0,
        "sales": 23
    },
    {
        "name": "Máy Mài Góc Bosch GWS 7-100",
        "price": 900000,
        "categoryIDs": [3],
        "tagIDs": [1],
        "images": [],
        "rating": 4,
        "discount": 0,
        "sales": 16
    },
    {
        "name": "Máy Hàn TIG Lincoln Electric TIG 200 AC/DC",
        "price": 3500000,
        "categoryIDs": [4],
        "tagIDs": [2],
        "images": [],
        "rating": 4.8,
        "discount": 0,
        "sales": 28
    },
    {
        "name": "Máy Cưa Bàn Bosch GTS 10 XC",
        "price": 2800000,
        "categoryIDs": [5],
        "tagIDs": [1],
        "images": [],
        "rating": 4.6,
        "discount": 0,
        "sales": 26
    },
    {
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

export { products, tags, categories }