function HomeProductCrt() {
  const data = [
    {
      id: 1,
      name: "Headphones",
      src: "https://ik.imagekit.io/beevfgcytiq/Audiophile/shared/desktop/tr:w-200px,h-200px/image-headphones.png?ik-sdk-version=react-1.1.1",
    },
    {
      id: 2,
      name: "Earphones",
      src: "https://ik.imagekit.io/beevfgcytiq/Audiophile/shared/desktop/tr:w-200px,h-200px/image-earphones.png?ik-sdk-version=react-1.1.1",
    },
    {
      id: 3,
      name: "Speaker",
      src: "https://ik.imagekit.io/beevfgcytiq/Audiophile/shared/desktop/tr:w-200px,h-200px/image-speakers.png?ik-sdk-version=react-1.1.1",
    },
  ];
  return (
    <div className="flex mt-5 justify-around items-center flex-col md:flex-row ">
      {data.map((item, index) => (
        <div key={index}>
          <div className="relative z-10">
            <img
              src={item.src}
              width="300px"
              height="300px"
              alt="speakeraudioimages"
            />
          </div>

          <div className="bg-gray-200 pb-4 pt-6 h-[40vh] rounded-md relative bottom-[19vh]">
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <h1>{item.name}</h1>
              <button className="mt-5 text-red-500">SHOP</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeProductCrt;
