# API: GET /api/admin/orders/products

## Mô tả
API này trả về thống kê tổng quan về các sản phẩm đã được mua bởi tất cả các người dùng, bao gồm:
- Tổng số lượng
- Tổng doanh thu
- Số lượng đơn hàng có liên quan
- Thông tin chi tiết về sản phẩm từ bảng `products`.

## Endpoint 

GET /api/admin/orders/products

## Tham số
- `startDate` (tùy chọn, không có cũng không sao): Ngày bắt đầu lọc các đơn hàng (format: `YYYY-MM-DD`).
- `endDate` (tùy chọn, không có cũng không sao): Ngày kết thúc lọc các đơn hàng (format: `YYYY-MM-DD`).

## Yêu cầu
- Yêu cầu quyền admin (JWT token cần được gửi trong tiêu đề `Authorization`).

## Ví dụ Request

GET http://localhost:5000/api/admin/orders/products?startDate=2024-12-01&endDate=2024-12-10

## Ví dụ Response
```json
{
  "success": true,
  "purchasedProducts": [
    {
      "productId": "product-id-1",
      "totalQuantity": 15,
      "numberOfOrders": 5,
      "totalRevenue": 1500,
      "productDetails": {
        "_id": "product-id-1",
        "title": "Sản phẩm A",
        "description": "Mô tả sản phẩm A",
        "price": 100,
        "category": "Điện tử",
        "brand": "Thương hiệu X",
        "totalStock": 50,
        "averageReview": 4.5
      }
    },
    {
      "productId": "product-id-2",
      "totalQuantity": 10,
      "numberOfOrders": 3,
      "totalRevenue": 1000,
      "productDetails": {
        "_id": "product-id-2",
        "title": "Sản phẩm B",
        "description": "Mô tả sản phẩm B",
        "price": 100,
        "category": "Thời trang",
        "brand": "Thương hiệu Y",
        "totalStock": 30,
        "averageReview": 4.2
      }
    }
  ]
}

```

# API: GET /api/shop/orders/products

## Mô tả
API này trả về thống kê tổng quan về các sản phẩm đã được mua bởi **người dùng hiện tại**, bao gồm:
- Tổng số lượng
- Tổng doanh thu
- Số lượng đơn hàng có liên quan
- Thông tin chi tiết về sản phẩm từ bảng `products`.

## Endpoint

GET /api/shop/orders/products

## Tham số
- `startDate` (tùy chọn): Ngày bắt đầu lọc các đơn hàng (format: `YYYY-MM-DD`).
- `endDate` (tùy chọn): Ngày kết thúc lọc các đơn hàng (format: `YYYY-MM-DD`).

## Yêu cầu
- Người dùng cần đăng nhập (JWT token được gửi qua cookie).

## Ví dụ Request

GET http://localhost:5000/api/shop/orders/products?startDate=2024-12-01&endDate=2024-12-10


## Ví dụ Response
```json
{
  "success": true,
  "purchasedProducts": [
    {
      "productId": "product-id-3",
      "totalQuantity": 8,
      "numberOfOrders": 3,
      "totalRevenue": 800,
      "productDetails": {
        "_id": "product-id-3",
        "title": "Sản phẩm C",
        "description": "Mô tả sản phẩm C",
        "price": 100,
        "category": "Gia dụng",
        "brand": "Thương hiệu Z",
        "totalStock": 40,
        "averageReview": 4.8
      }
    }
  ]
}

```

## Lưu ý

- Đảm bảo rằng JWT token được tạo khi người dùng đăng nhập hoặc admin có quyền truy cập.
- Thử nghiệm API với Postman hoặc VSCode Extensions.
- Thông tin về startDate và endDate là tùy chọn; nếu không được cung cấp, API sẽ trả về dữ liệu cho toàn bộ thời gian.

