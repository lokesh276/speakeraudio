// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addtoCart, getProductData } from "../Store/cartslice";
// import data from "../Utils/productData";

// function ProductsCards() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProductData(data));
//   }, []);

//   return (
//     <div className="grid grid-cols-4 gap-3 p-5 ">
//       {data?.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105"
//           >
//             <a
//               className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
//               href="#"
//             >
//               <img
//                 className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//                 src={
//                   item?.url
//                     ? item?.url
//                     : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSg0jUsD3wKwUY1RCzkVs_UulJ7nyH7VHWV0PXXFRJPmvmlGptXN0dyhPAwGgnzfmyDfQmfKK-0Weivc3CY2Ih13hk-ubJQEn_t0DW7nWSYyx4zBPn4CQHe"
//                 }
//                 alt="product image"
//               />
//             </a>
//             <div className="mt-4 px-5 pb-5">
//               <a href="#">
//                 <h5 className="text-xl font-semibold tracking-tight text-gray-800 hover:text-blue-600 transition-colors duration-300">
//                   {item.shoesName}
//                 </h5>
//               </a>
//               <div className="mt-2 mb-5 flex items-center justify-between">
//                 <p>
//                   <span className="text-3xl font-bold text-gray-900">
//                     ₹{item.price}
//                   </span>
//                 </p>
//               </div>
//               <button
//                 onClick={() => dispatch(addtoCart(item))}
//                 className="flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ProductsCards;
