import React, { useEffect, useState } from "react";
import { getPackages } from "../utils/package.services";

import Loading from "./Loading";
import Pagionation from "./Pagionation";
import PackageCard from "./PackageCard";

const Packages = () => {
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

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerpage = 10;

  const indexOflastProduct = currentPage * productsPerpage;
  const indexOfFirstProduct = indexOflastProduct - productsPerpage;

  const currentProduct = packages.slice(indexOfFirstProduct,indexOflastProduct);

  // function to change current page
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };
 

  if (loading) return <Loading />;

  return (
    <section>
      <PackageCard packages={currentProduct} />
      <Pagionation
        productsPerpage={productsPerpage}
        totalProducts={packages.length}
        paginate={paginate}
        activePage={currentPage}
      />
    </section>
  );
};

export default Packages;
