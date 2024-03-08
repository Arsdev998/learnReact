import React, { useEffect, useState } from "react";
import { getPackages } from "../utils/package.services";
import { BiArchive } from "react-icons/bi";
import { MdOutlineAirlineSeatLegroomExtra, MdWatchLater } from "react-icons/md";
import { FaPlaneArrival, FaPlane, FaCalendarAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Loading from "./Loading";

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

  const rp = (asoy) => {
    return asoy.toLocaleString("id-ID");
  };

  if (loading) return <Loading/>

  return (
    <div className="flex flex-wrap gap-[20px] justify-center">
      {packages.map((pkg) => (
        <div
          className="w-[300px] h-full  relative bg-[#ffffff] rounded-xl "
          key={pkg.id}
        >
          <img
            className="w-full h-[300px] object-cover rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer"
            src={pkg.image_thumbnail}
          />
          <div className="p-[10px] bg-[red] absolute top-[270px] right-[23px] w-[250px] rounded-xl">
            <h2 className="font-bold">{pkg.judul_paket}</h2>
            <div className="flex justify-around gap-2 items-center">
              <p className="font-semibold flex items-center gap-1">
                <BiArchive /> Total Seat {pkg.kuota_tersedia}
              </p>
              <p className="text-green-500 flex items-center gap-1">
                <MdOutlineAirlineSeatLegroomExtra />
                {pkg.kuota} Sisa Seat
              </p>
            </div>
          </div>
          <div className=" mt-[30px] grid grid-cols-2 p-[15px]">
            <p className="flex items-center">
              <FaCalendarAlt className="text-[#ee2e2a]" />
              {pkg.jadwal_keberangkatan}
            </p>
            <p className="flex items-center">
              <MdWatchLater className="text-[#ee2e2a]" />
              {pkg.jumlah_hari}
            </p>
            <p className="flex items-center">
              <FaPlane className="text-[#ee2e2a]" />
              {pkg.maskapaiName}
            </p>
            <p className="flex items-center truncate">
              <FaPlaneArrival className="text-[#ee2e2a]" /> {pkg.mendarat_di}
            </p>
            <p>{"⭐".repeat(pkg.hotel_star)}</p>
          </div>
          <div className="flex justify-between items-center p-[15px]">
            <p className="text-green-600 font-semibold text-xl">
              Rp{rp(pkg.price_quad_basic)}
            </p>
            <button className="p-2 bg-[#ee2e2a] rounded-xl text-[#fff] ">Lihat Paket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
