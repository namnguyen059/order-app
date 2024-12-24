const express = require("express");
const {
  getTotalUsers,
  getTotalReviews,
  getRevenueByPeriod,
  getTotalOrders,
  getRevenue,
  getOrdersByPeriod,
  getProductsSummary,
  getTotalProducts,
} = require("../../controllers/admin/admin-dashboard-controller");

const router = express.Router();

router.get("/users/total", getTotalUsers);
router.get("/reviews/total", getTotalReviews);
router.get("/revenue/period", getRevenueByPeriod);
router.get("/orders/total", getTotalOrders);
router.get("/orders/revenue", getRevenue);
router.get("/orders/period", getOrdersByPeriod);
router.get("/orders/products", getProductsSummary);
router.get("/products/total", getTotalProducts);

module.exports = router;
