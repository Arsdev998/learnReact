import React from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
const Pagionation = ({
  productsPerpage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerpage); i++) {
    pageNumber.push(i);
  }
  console.log(activePage);
  return (
    <ul className="flex items-center gap-3 justify-center mt-5">
      <li className="bg-yellow-200 p-2 rounded-full">
        <a
          href="#"
          onClick={() => {
            if (activePage > 1) {
              // Ubah kondisi agar tombol previous hanya berfungsi jika activePage lebih besar dari 1
              paginate(activePage - 1);
            }
          }}
        >
          <GrLinkPrevious className="" />
        </a>
      </li>
      {pageNumber.map((number) => (
        <li
          key={number}
          className={`bg-yellow-200 px-3 py-1 rounded-[100%] text-black ${
            number === activePage ? "!bg-red-600 text-white" : ""
          }`}
        >
          <button
            onClick={() => {
              paginate(number);
            }}
          >
            {" "}
            {number}
          </button>
        </li>
      ))}
      <a
        href="#"
        className="bg-yellow-200 p-2 rounded-full"
        onClick={() => {
          if (activePage < pageNumber.length) {
            paginate(activePage + 1);
          }
        }}
      >
        <GrLinkNext />
      </a>
    </ul>
  );
};

export default Pagionation;
