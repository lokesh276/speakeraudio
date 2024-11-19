
function HalfSpeakerComponent() {
    return (
      <section className="m-auto w-[80%] ">
        <div className=" mt-[10%] rounded-lg flex items-center justify-center md:gap-[30%] bg-[#bdb8b8]  flex-col md:flex-row gap-[40px]">
          <div>
            <button className="border border-black p-3 mt-4 hover:bg-black hover:text-white">
              SEE PRODUCTS
            </button>
          </div>
          <div>
            <img
              className="h-[230px] w-[570px] md:object-fill object-cover "
              src="https://ik.imagekit.io/beevfgcytiq/Audiophile/home/desktop/image-speaker-zx7.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    );
}

export default HalfSpeakerComponent