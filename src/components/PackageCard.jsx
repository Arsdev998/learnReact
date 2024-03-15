import React, { useState, useEffect } from "react";
import { BiArchive } from "react-icons/bi";
import { MdOutlineAirlineSeatLegroomExtra, MdWatchLater } from "react-icons/md";
import { FaPlaneArrival, FaPlane, FaCalendarAlt } from "react-icons/fa";
// import { IoStar } from "react-icons/io5";

const PackageCard = ({ packages }) => {
  const [originalPackages, setOriginalPackages] = useState([]);
  const [filteredPackage, setFilteredPackage] = useState([]);

  useEffect(() => {
    setOriginalPackages(packages);
    setFilteredPackage(packages);
  }, [packages]);

  // Filter dengan Maskapai
  const filterMaskapaiName = (maskapaiName) => {
    const filtered = originalPackages.filter((pkg) =>
      pkg.maskapaiName.toLowerCase().includes(maskapaiName.toLowerCase())
    );
    setFilteredPackage(filtered);
  };

  // Filter dengan Judul Paket
  const filterMaskaJudul = (judul_paket) => {
    const filtered = originalPackages.filter((pkg) =>
      pkg.judul_paket.toLowerCase().includes(judul_paket.toLowerCase())
    );
    setFilteredPackage(filtered);
  };

  // Reset filter
  const resetFilter = () => {
    setFilteredPackage(originalPackages);
  };

  const filterButtons = [
    { label: "My Indo Airlines", maskapaiName: "indo Airlines" },
    { label: "Garuda Indonesia", maskapaiName: "Garuda Indonesia" },
    { label: "Citilink", maskapaiName: "Citilink" },
    { label: "Sriwijaya Air", maskapaiName: "Sriwijaya" },
    { label: "Trigana Air", maskapaiName: "trigana air" },
  ];
  const filterJudul = [
    { label: "Umrah", judul: "Umrah" },
    { label: "Haji", judul: "Haji" },
    { label: "Tour", judul: "Tour" },
  ];

  const rp = (asoy) => {
    return asoy.toLocaleString("id-ID");
  };

  return (
    <div className="w-[1500px]">
      <div className="flex justify-center gap-2 my-4">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            className="p-2 bg-[#ee2e2a] rounded-xl text-[#fff]"
            onClick={() => filterMaskapaiName(button.maskapaiName)}
          >
            {button.label}
          </button>
        ))}
        {filterJudul.map((btn, index) => (
          <button
            key={index}
            className="p-2 bg-[#ee2e2a] rounded-xl text-[#fff]"
            onClick={() => filterMaskaJudul(btn.judul)}
          >
            {btn.label}
          </button>
        ))}
        <button
          className="p-2 bg-[#ee2e2a] rounded-xl text-[#fff]"
          onClick={() => resetFilter()}
        >
          Reset Filter
        </button>
      </div>
      <div className="flex flex-wrap gap-[20px] justify-center">
        {filteredPackage.map((pkg) => (
          <div
            className="w-[300px] h-full  relative bg-[#ffffff] rounded-xl "
            key={pkg.id}
          >
            <img
              className="w-full h-[300px] object-cover rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              src={pkg.image_thumbnail}
            />
            <div className="p-[10px] bg-[red] absolute top-[260px] right-[23px] w-[250px] rounded-xl">
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
            <div className=" mt-[37px] grid grid-cols-2 p-[15px]">
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
                <FaPlaneArrival className="text-[#ee2e2a]" />
                {pkg.mendarat_di}
              </p>
              <p>{"⭐".repeat(pkg.hotel_star)}</p>
            </div>
            <div className="flex justify-between items-center p-[15px]">
              <p className="text-green-600 font-semibold text-xl">
                Rp{rp(pkg.price_quad_basic)}
              </p>
              <button className="p-2 bg-[#ee2e2a] rounded-xl text-[#fff] ">
                Lihat Paket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
