function FixedFirstComponent() {
  return (
    <section className="mt-[10%] flex justify-center items-center md:gap-[5%] gap-[10px] flex-col md:flex-row">
      <div>
        <img
          src="https://ik.imagekit.io/beevfgcytiq/Audiophile/home/desktop/tr:r-10/image-earphones.jpg?ik-sdk-version=react-1.1.1"
          alt="Earphones"
          className="object-cover p-[17px] md:p-0"
        />
      </div>
      <div className="w-[90%] md:w-[40%] bg-[#e5e7eb] h-[41vh] rounded-lg flex flex-col items-center justify-center text-center">
        <h1>EARBUDS</h1>
        <button className="border border-black p-3 mt-4 hover:bg-black hover:text-white">SEE PRODUCTS</button>
      </div>
    </section>
  );
}

export default FixedFirstComponent;
