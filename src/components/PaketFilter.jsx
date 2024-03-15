// import React from "react";
// import { getPackages } from "../utils/package.services";
// const PaketFilter = ({ filterItem, setItem, menuItem, setSelectedItem }) => {
//     console.log(getPackages)
//   return (
//     <section>
//       <aside className="w-[200px] p-5">
//         <div className="witget-header">
//           <h5 className="ms-2">All Category</h5>
//         </div>
//         <div>
//           <button
//             onClick={() => setProducts(setItem)}
//             className={`m-2 ${setSelectedItem === "All" ? "bg-warning" : ""}`}
//           >
//             All
//           </button>
//           {menuItem.map((VaL, id) => {
//             return (
//               <button
//                 key={id}
//                 className={`m-2 ${setSelectedItem === VaL ? "bg-warning" : ""}`}
//                 onClick={() => filterItem(VaL)}
//               >
//                 {VaL}
//               </button>
//             );
//           })}
//         </div>
//       </aside>
//     </section>
//   );
// };

// export default PaketFilter;
