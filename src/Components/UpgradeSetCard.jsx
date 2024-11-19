function UpgradeSetCard() {
  return (
    <div className="mt-[10%] mx-auto w-[90%] md:w-[80%] bg-orange-500 relative rounded-lg p-6 overflow-hidden">
      <section className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
        <div className="flex-shrink-0">
          <img
            src="https://ik.imagekit.io/beevfgcytiq/Audiophile/home/desktop/tr:w-380/image-speaker-zx9.png?ik-sdk-version=react-1.1.1"
            alt="speaker"
            height={300}
            width={300}
            className="object-cover md:w-[300px] md:h-[300px] w-full max-w-[200px] rounded"
          />
        </div>
        <div className="text-white text-center md:text-left">
          <h1 className="text-lg md:text-xl font-normal">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h1>
          <button className="mt-3 bg-black text-white p-2 rounded-md hover:bg-gray-800 transition duration-150">
            SEE PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
}

export default UpgradeSetCard;
