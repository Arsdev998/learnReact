import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PackagesDetail = () => {
  const [packages, setPackages] = useState([]);
  const { id } = useParams();
  // // Mendapatkan detail produk
  // // Mendapatkan detail produk
  // useEffect(() => {
  //   getPackagesDetail(id, (data) => {
  //     setPackages(data);
  //   });
  // }, [id]);
  // console.log(packages);
  return <div>helo</div>;
};

export default PackagesDetail;
