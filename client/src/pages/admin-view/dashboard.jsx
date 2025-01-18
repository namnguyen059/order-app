import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  console.log(uploadedImageUrl, "uploadedImageUrl");

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  console.log(featureImageList, "featureImageList");

  return (
    <div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
        // isEditMode={currentEditedId !== null}
      />
      <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
        Upload
      </Button>
      <div className="flex flex-col gap-4 mt-5">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((featureImgItem) => (
              <div className="relative">
                <img
                  src={featureImgItem.image}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Line, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";

// // Registering Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// function AdminDashboard() {
//   // Random number generator for placeholder data
//   const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//   // Simulated state for different metrics
//   const [totalUsers, setTotalUsers] = useState(generateRandomNumber(100, 1000));
//   const [totalProducts, setTotalProducts] = useState(generateRandomNumber(50, 500));
//   const [totalOrders, setTotalOrders] = useState(generateRandomNumber(10, 100));
//   const [totalReviews, setTotalReviews] = useState(generateRandomNumber(20, 300));
//   const [totalRevenue, setTotalRevenue] = useState(generateRandomNumber(5000, 50000));

//   // Simulated chart data (Orders and Revenue over time)
//   const [chartData, setChartData] = useState({
//     orders: Array.from({ length: 6 }, () => generateRandomNumber(5, 15)),
//     revenue: Array.from({ length: 6 }, () => generateRandomNumber(1000, 5000)),
//   });

//   useEffect(() => {
//     // Simulate new data generation (for charts and dashboard) every 5 seconds
//     const interval = setInterval(() => {
//       setTotalUsers(generateRandomNumber(100, 1000));
//       setTotalProducts(generateRandomNumber(50, 500));
//       setTotalOrders(generateRandomNumber(10, 100));
//       setTotalReviews(generateRandomNumber(20, 300));
//       setTotalRevenue(generateRandomNumber(5000, 50000));
//       setChartData({
//         orders: Array.from({ length: 6 }, () => generateRandomNumber(5, 15)),
//         revenue: Array.from({ length: 6 }, () => generateRandomNumber(1000, 5000)),
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Chart options for the Line chart (orders over time)
//   const ordersChartOptions = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Orders Over Time",
//         font: {
//           size: 20,
//         },
//       },
//     },
//   };

//   // Chart options for the Bar chart (Revenue over time)
//   const revenueChartOptions = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Revenue Over Time",
//         font: {
//           size: 20,
//         },
//       },
//     },
//   };

//   // Data for the Orders Line chart
//   const ordersChartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Orders",
//         data: chartData.orders,
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         fill: true,
//       },
//     ],
//   };

//   // Data for the Revenue Bar chart
//   const revenueChartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Revenue",
//         data: chartData.revenue,
//         backgroundColor: "rgba(153, 102, 255, 0.6)",
//         borderColor: "rgba(153, 102, 255, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

//       {/* Dashboard Metrics */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Total Users</h2>
//           <p className="text-3xl font-bold">{totalUsers}</p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Total Products</h2>
//           <p className="text-3xl font-bold">{totalProducts}</p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Total Orders</h2>
//           <p className="text-3xl font-bold">{totalOrders}</p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Total Reviews</h2>
//           <p className="text-3xl font-bold">{totalReviews}</p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Total Revenue</h2>
//           <p className="text-3xl font-bold">${totalRevenue.toFixed(2)}</p>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Orders Over Time</h3>
//           <Line data={ordersChartData} options={ordersChartOptions} />
//         </div>

//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Revenue Over Time</h3>
//           <Bar data={revenueChartData} options={revenueChartOptions} />
//         </div>
//       </div>

//       {/* Refresh Data Button */}
//       <Button onClick={() => fetchDashboardData()} className="mt-5 w-full">
//         Refresh Data
//       </Button>
//     </div>
//   );
// }

// export default AdminDashboard;



