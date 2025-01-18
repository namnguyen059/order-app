export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "mobile-phones", label: "Mobile Phones" },
      { id: "laptops", label: "Laptops" },
      { id: "tablets", label: "Tablets" },
      { id: "audio", label: "Audio & Headphones" },
      { id: "cameras", label: "Cameras" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "sony", label: "Sony" },
      { id: "dell", label: "Dell" },
      { id: "hp", label: "HP" },
      { id: "canon", label: "Canon" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "mobile-phones",
    label: "Mobile Phones",
    path: "/shop/listing",
  },
  {
    id: "laptops",
    label: "Laptops",
    path: "/shop/listing",
  },
  {
    id: "tablets",
    label: "Tablets",
    path: "/shop/listing",
  },
  {
    id: "audio",
    label: "Audio & Headphones",
    path: "/shop/listing",
  },
  {
    id: "cameras",
    label: "Cameras",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  "mobile-phones": "Mobile Phones",
  laptops: "Laptops",
  tablets: "Tablets",
  audio: "Audio & Headphones",
  cameras: "Cameras",
};

export const brandOptionsMap = {
  apple: "Apple",
  samsung: "Samsung",
  sony: "Sony",
  dell: "Dell",
  hp: "HP",
  canon: "Canon",
};

export const filterOptions = {
  category: [
    { id: "mobile-phones", label: "Mobile Phones" },
    { id: "laptops", label: "Laptops" },
    { id: "tablets", label: "Tablets" },
    { id: "audio", label: "Audio & Headphones" },
    { id: "cameras", label: "Cameras" },
  ],
  brand: [
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "sony", label: "Sony" },
    { id: "dell", label: "Dell" },
    { id: "hp", label: "HP" },
    { id: "canon", label: "Canon" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
