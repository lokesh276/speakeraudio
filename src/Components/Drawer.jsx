// import { useSelector, useDispatch } from "react-redux";
// import { handleOpenDrawer } from "../Store/cartslice";
// import "react-modern-drawer/dist/index.css";
// import Drawer from "react-modern-drawer";
// import ProductCart from "./ProductCart";

// function DrawerCart() {
//   const isOpen = useSelector((val) => val.cart.isOpenDrawer);
//   const dispatch = useDispatch();
//   console.log(isOpen, "@#4234234");
//   return (
//     <>
//       <div className="flex items-end justify-end  w-[96%]">
//         <button className="px-3 py-2 rounded bg-black text-white mt-3" onClick={() => dispatch(handleOpenDrawer(!isOpen))}>
//           Cart
//         </button>
//       </div>
//       <Drawer
//         open={isOpen}
//         onClose={() => dispatch(handleOpenDrawer(!isOpen))}
//         direction="right"
//         size={480}x
//         className="bla bla bla"
//       >
//         <div>
//           <ProductCart />
//         </div>
//       </Drawer>
//     </>
//   );
// }

// export default DrawerCart;
