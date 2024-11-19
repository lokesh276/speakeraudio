import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const naviagte = useNavigate()
  return (
    <div className="bg-black  relative z-1">
      <div className="flex  text-white items-center justify-between m-auto w-[80%] p-0 md:p-6 border-b-2 gap-[20px] md:gap-0  flex-col md:flex-row">
        <div className="text-3xl font-extrabold mt-3 md-mt-0">speakeraudio</div>
        <div className="flex gap-[10px] font-light text-sm flex-row sm:gap-[17px] md:gap-[10%]  ">
          <Link to="/" className="hover:text-orange-400">
            HOME
          </Link>
          <Link to="/headphones" className="hover:text-orange-400">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="hover:text-orange-400">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="hover:text-orange-400">
            EARPHONES
          </Link>
        </div>
        <div className="flex gap-5 flex-row mb-5 md:mb-0">
          <h1 className="mt-[3px]">
            <AiOutlineShoppingCart
              onClick={() => naviagte("/add_to_cart")}
              className="w-[37px] h-[29px] "
            />
          </h1>
          <button
            onClick={() => naviagte("/signup")}
            className="bg-orange-300 text-white p-[7px]"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
