function BestAudio() {
  return (
    <section className="mt-[10%] mb-[10%]">
      <div className="flex  justify-center flex-col md:flex-row items-center gap-10 m-auto">
        <div className="flex-1 text-center items-center mx-auto">
          {" "}
          <h1 className="uppercase text-3xl font-bold ">
            Bringing you the{" "}
            <h1>
              <span className="text-orange-400">best</span> audio gear
            </h1>
          </h1>
          <h2 className="mt-5   w-[70%] m-auto">
            {" "}
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </h2>
        </div>
        <div className="flex-1 mt-5 p-3 md:p-0 ">
          {" "}
          <img
            src="https://ik.imagekit.io/beevfgcytiq/Audiophile/shared/desktop/tr:r-10/men-using-product.jpg?ik-sdk-version=react-1.1.1"
            alt="Person using audio equipment"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default BestAudio;
