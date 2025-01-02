const User = require("../../models/User");
const Product = require("../../models/Product");
const Review = require("../../models/Review");
const Order = require("../../models/Order");

const getTotalUsers = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.status(200).json({
      success: true,
      totalUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching total users.",
    });
  }
};

const getTotalReviews = async (req, res) => {
  try {
    const totalReviews = await Review.countDocuments();
    res.status(200).json({
      success: true,
      totalReviews,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching total reviews.",
    });
  }
};

const getRevenueByPeriod = async (req, res) => {
  try {
    const revenueByMonth = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$orderDate" } }, // Group by month
          totalRevenue: { $sum: "$totalAmount" }, // Sum up totalAmount
        },
      },
      { $sort: { _id: 1 } }, // Sort by month in ascending order
    ]);

    res.status(200).json({
      success: true,
      data: revenueByMonth.map((item) => ({
        month: item._id, // Month in "YYYY-MM" format
        totalRevenue: item.totalRevenue, // Revenue for that month
      })),
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching total revenue by month.",
    });
  }
};


// Get total number of orders
const getTotalOrders = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments({});
    res.status(200).json({
      success: true,
      total: totalOrders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching total orders.",
    });
  }
};

// Get total revenue from all orders
const getRevenue = async (req, res) => {
  try {
    const revenue = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
    ]);
    const totalRevenue = revenue[0]?.totalRevenue || 0;
    res.status(200).json({
      success: true,
      revenue: totalRevenue,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching revenue.",
    });
  }
};

const getOrdersByPeriod = async (req, res) => {
  try {
    const ordersByPeriod = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$orderDate" } }, // Group by month
          count: { $sum: 1 }, // Total orders
          //revenue: { $sum: "$totalAmount" }, // Total revenue
        },
      },
      { $sort: { _id: 1 } }, // Sort by month in ascending order
    ]);

    res.status(200).json({
      success: true,
      data: ordersByPeriod.map((item) => ({
        month: item._id, // Month in "YYYY-MM" format
        totalOrders: item.count,
        //totalRevenue: item.revenue,
      })),
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching orders by period.",
    });
  }
};


const getProductsSummary = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const dateFilter = {};
    if (startDate) dateFilter.$gte = new Date(startDate);
    if (endDate) dateFilter.$lte = new Date(endDate);

    const matchCriteria = Object.keys(dateFilter).length
      ? { orderDate: dateFilter }
      : {};

    // Aggregate product-based statistics with lookup
    const productSummary = await Order.aggregate([
      { $match: matchCriteria },
      { $unwind: "$cartItems" },
      {
        $addFields: {
          "cartItems.productId": {
            $convert: { input: "$cartItems.productId", to: "objectId" }, // Convert to ObjectId
          },
        },
      },
      {
        $group: {
          _id: "$cartItems.productId",
          totalQuantity: { $sum: "$cartItems.quantity" },
          numberOfOrders: { $sum: 1 }, // Count the number of orders involving the product
          totalRevenue: { $sum: { $multiply: ["$cartItems.quantity", { $toDouble: "$cartItems.price" }] } },
        },
      },
      {
        $lookup: {
          from: "products", // Collection to join
          localField: "_id", // Field in the current collection (Order) to match
          foreignField: "_id", // Field in the "products" collection to match
          as: "productDetails", // Name for the resulting array
        },
      },
      {
        $unwind: "$productDetails", // Unwind the product details array
      },
    ]);

    res.status(200).json({
      success: true,
      purchasedProducts: productSummary.map((item) => ({
        productId: item._id,
        totalQuantity: item.totalQuantity,
        numberOfOrders: item.numberOfOrders,
        totalRevenue: item.totalRevenue,
        productDetails: item.productDetails, // Full product details from the products collection
      })),
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching product summary.",
    });
  }
};

const getTotalProducts = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    res.status(200).json({
      success: true,
      totalProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching total products.",
    });
  }
};

module.exports = {
  getTotalUsers,
  getTotalReviews,
  getRevenueByPeriod,
  getTotalOrders,
  getRevenue,
  getOrdersByPeriod,
  getProductsSummary,
  getTotalProducts,
};
