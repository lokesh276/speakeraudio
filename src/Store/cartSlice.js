// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isOpenDrawer: false,
//   productData: [],
//   cartData: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     handleOpenDrawer: (state, action) => {
//       state.isOpenDrawer = action.payload;
//     },
//     getProductData: (state, action) => {
//       state.productData = action.payload;
//     },
//     addtoCart: (state, action) => {
//       const isIdExist = state.cartData.find(
//         (item) => item.id === action.payload.id
//       );
//       if (!isIdExist) state.cartData.push(action.payload);
//     },
//     deleteCartItem: (state, action) => {
//       const filterArr = state.cartData.filter(
//         (item) => item.id !== action.payload
//       );
//       state.cartData = filterArr;
//     },
//     increaseCount: (state, action) => {
//       state.cartData = state.cartData.map((item) => {
//         if (item.id === action.payload) {
//           return {
//             ...item,
//             count: item.count + 1,
//           };
//         }
//         return item;
//       });
//     },
//     decreaseCount: (state, action) => {
//       state.cartData = state.cartData.map((item) => {
//         if (item.id === action.payload && item.count > 1) {
//           return {
//             ...item,
//             count: item.count - 1,
//           };
//         }
//         return item;
//       });
//     },
//     handleEmptyCart: (state) => {
//       state.cartData = [];
//     },
//   },
// });

// export const {
//   handleOpenDrawer,
//   getProductData,
//   addtoCart,
//   deleteCartItem,
//   increaseCount,
//   decreaseCount,
//   handleEmptyCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;
