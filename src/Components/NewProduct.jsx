function NewProduct() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/beevfgcytiq/Audiophile/home/desktop/hero-desktop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <div className="text-white w-[100%] md:w-[45%] p-[45px] md:p-0">
          <h1 className="text-xl opacity-50">
            N E W &nbsp; P R O D U C T S &nbsp; A R E &nbsp; A R I V I N G
          </h1>
          <h2 className="text-xm   mb-6 m-auto w-[57%] mt-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h2>
          <button className="bg-orange-300 text-white p-3 rounded hover:bg-orange-400 transition duration-300">
            SEE PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
