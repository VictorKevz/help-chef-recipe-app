// import React,{useState} from "react";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import "../css/filters.css";

// function DropDown({ sortOption, setSortOption }) {
//   const [dropDown, setDropDown] = useState(false);

//   const toggleDropDown = () => {
//     setDropDown(!dropDown);
//   };

//   const updateSortOption = (currentOption) => {
//     setSortOption(currentOption.toLowerCase());
//   };
//   return (
//     <div className="drop-down-wrapper">
//       <button className="drop-down-btn" onClick={toggleDropDown}>
//         Sort Meals
//         {dropDown ? (
//           <ArrowDropUpIcon fontSize="large" />
//         ) : (
//           <ArrowDropDownIcon fontSize="large" />
//         )}
//       </button>
//       {dropDown && (
//         <ul className="drop-down-items">
//         <li onClick={() => updateSortOption("Name")} className="item">
//           Name
//         </li>
//         <li onClick={() => updateSortOption("ID")} className="item">
//           ID
//         </li>
//       </ul>
//       )}
//     </div>
//   );
// }

// export default DropDown;
