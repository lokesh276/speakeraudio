// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteCartItem,
//   increaseCount,
//   decreaseCount,
//   handleEmptyCart,
// } from "../Store/cartslice";

// function ProductCart() {
//   const cartItems = useSelector((state) => state?.cart?.cartData);
//   const dispatch = useDispatch();
//   console.log(cartItems, "23423423423");

//   const renderCartItem = (item) => {
//     const { id, url, shoesName, price, count } = item;
//     return (
//       <li className="flex py-6" key={id}>
//         <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//           <img
//             src={url}
//             alt={`Image of ${shoesName}`}
//             className="h-full w-full object-cover object-center"
//           />
//         </div>
//         <div className="ml-4 flex flex-1 flex-col">
//           <div className="flex justify-between text-base font-medium text-gray-900">
//             <h3>{shoesName}</h3>
//             <p className="ml-4">₹{price * count}</p>
//           </div>
//           <p className="mt-1 text-sm text-gray-500">
//             Single Item Price ₹{price}
//           </p>
//           <div className="flex flex-1 items-end justify-between text-sm">
//             <span
//               className="cursor-pointer"
//               onClick={() => dispatch(decreaseCount(id))}
//             >
//               -
//             </span>
//             <p className="text-gray-500">Qty {count}</p>
//             <span
//               className="cursor-pointer"
//               onClick={() => dispatch(increaseCount(id))}
//             >
//               +
//             </span>
//             <button
//               type="button"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//               onClick={() => dispatch(deleteCartItem(id))}
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       </li>
//     );
//   };

//   const renderEmptyCartMessage = () => (
//     <div>Add some products in the cart 🙂</div>
//   );

//   const calculateTotal = () =>
//     cartItems?.reduce((total, item) => total + item.price * item.count, 0);

//   return (
//     <div
//       className="relative z-10"
//       aria-labelledby="slide-over-title"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div
//         className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
//         aria-hidden="true"
//       ></div>
//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//             <div className="pointer-events-auto w-screen max-w-md">
//               <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                   <div className="flex items-start justify-between">
//                     <h2
//                       className="text-lg font-medium text-gray-900"
//                       id="slide-over-title"
//                     >
//                       Shopping cart
//                     </h2>
//                   </div>

//                   <div className="mt-8">
//                     <ul role="list" className="-my-6 divide-y divide-gray-200">
//                       {cartItems?.length > 0
//                         ? cartItems.map(renderCartItem)
//                         : renderEmptyCartMessage()}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="px-4 py-4 sm:px-6">
//                   <div className="flex justify-between">
//                     <span className="text-lg font-medium text-gray-900">
//                       Total: ₹{calculateTotal()}
//                     </span>
//                     <button
//                       type="button"
//                       className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                       onClick={() => dispatch(handleEmptyCart())}
//                     >
//                       Empty Cart
//                     </button>
//                     <button
//                       type="button"
//                       className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       onClick={() => console.log("Proceeding to checkout...")}
//                     >
//                       Checkout
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCart;
