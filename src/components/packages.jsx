import React, { useEffect, useState } from "react";
import { getPackages } from "../utils/package.services";

import Loading from "./Loading";
import Pagionation from "./Pagionation";
import PackageCard from "./PackageCard";
// import PaketFilter from "./PaketFilter";

const Packages = ({filteredPackage}) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getPackages();
        setPackages(data.cards);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(filteredPackage)
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerpage = 10;

  const indexOflastProduct = currentPage * productsPerpage;
  const indexOfFirstProduct = indexOflastProduct - productsPerpage;

  const currentProduct = packages.slice(
    indexOfFirstProduct,
    indexOflastProduct
  );

  // function to change current page
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  if (loading) return <Loading />;

  // Filter
  // const [selectedFilter, setSelectedFilter] = useState("all");
  // const menuItem = [...new Set(packages.map((Val) => Val.judul_paket))];

  // const filterItem = (title) => {
  //   const newItem = packages.filter((newVal) => {
  //     return newVal.judul_paket === title;
  //   });
  //   setSelectedFilter(title);
  //   setPackages(newItem);
  // };

  return (
    <section>
      <div className="flex">
        {/* <PaketFilter
          filterItem={filterItem}
          setItem={setPackages}
          menuItem={menuItem}
          setSelectedFilter={selectedFilter}
        /> */}
        <PackageCard packages={currentProduct} />
      </div>
      <div>
      <Pagionation
  productsPerpage={productsPerpage}
  totalProducts={packages.length} // Perbaiki penulisan properti di sini
  paginate={paginate}
  activePage={currentPage}
/>

      </div>
    </section>
  );
};

export default Packages;
