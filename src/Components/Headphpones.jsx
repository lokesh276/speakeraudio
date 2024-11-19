import ReactPaginate from "react-paginate";
import { data } from "../Utils/headphoneData";
import { useState } from "react";

function Headphones() {
  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(0);

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {displayedItems.map((item) => (
          <div key={item.id} className="max-w-sm w-full py-5 px-8 mt-6">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                loading="lazy"
                src={item.url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <span className="text-xl font-bold text-indigo-600">
                  {item.price}
                </span>
                <button className="w-full bg-indigo-600 text-white py-2 mt-3 rounded-lg hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 pb-4">
        <ReactPaginate
          className="flex space-x-1 gap-2"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={({ selected }) => setCurrentPage(selected)}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          previousLabel="Previous"
          containerClassName="pagination"
          pageLinkClassName="border border-gray-300 text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100"
          activeLinkClassName="bg-indigo-600 text-white border border-indigo-600"
        />
      </div>
    </>
  );
}

export default Headphones;
