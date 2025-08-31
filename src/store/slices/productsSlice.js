import { createSlice } from '@reduxjs/toolkit';

const mockProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    category: "Electronics",
    rating: 4.5,
    brand: "TechSound",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    category: "Electronics",
    rating: 4.3,
    brand: "FitTech",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Advanced fitness tracking with heart rate monitor"
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    rating: 4.7,
    brand: "EcoWear",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Comfortable and sustainable cotton t-shirt"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    category: "Home",
    rating: 4.6,
    brand: "HydroLife",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    description: "Insulated water bottle keeps drinks cold for 24 hours"
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 49.99,
    category: "Electronics",
    rating: 4.4,
    brand: "ChargeTech",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    description: "Fast wireless charging for all compatible devices"
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 39.99,
    category: "Sports",
    rating: 4.8,
    brand: "ZenFit",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    description: "Non-slip yoga mat perfect for all types of exercise"
  },
  {
    id: 7,
    name: "Coffee Maker",
    price: 89.99,
    category: "Home",
    rating: 4.2,
    brand: "BrewMaster",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
    description: "Programmable coffee maker with thermal carafe"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 129.99,
    category: "Sports",
    rating: 4.6,
    brand: "RunFast",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Lightweight running shoes with superior cushioning"
  }
];

const initialState = {
  products: mockProducts,
  filteredProducts: mockProducts,
  categories: [...new Set(mockProducts.map(p => p.category))],
  brands: [...new Set(mockProducts.map(p => p.brand))],
  filters: {
    category: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    minRating: 0,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      // Apply filters
      let filtered = state.products;
      
      if (state.filters.category) {
        filtered = filtered.filter(p => p.category === state.filters.category);
      }
      if (state.filters.brand) {
        filtered = filtered.filter(p => p.brand === state.filters.brand);
      }
      if (state.filters.minPrice) {
        filtered = filtered.filter(p => p.price >= parseFloat(state.filters.minPrice));
      }
      if (state.filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= parseFloat(state.filters.maxPrice));
      }
      if (state.filters.minRating > 0) {
        filtered = filtered.filter(p => p.rating >= state.filters.minRating);
      }
      
      state.filteredProducts = filtered;
    },
    clearFilters: (state) => {
      state.filters = {
        category: '',
        brand: '',
        minPrice: '',
        maxPrice: '',
        minRating: 0,
      };
      state.filteredProducts = state.products;
    },
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: Math.max(...state.products.map(p => p.id)) + 1,
      };
      state.products.push(newProduct);
      state.filteredProducts = state.products;
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        state.filteredProducts = state.products;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      state.filteredProducts = state.products;
    },
  },
});

export const { setFilters, clearFilters, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
