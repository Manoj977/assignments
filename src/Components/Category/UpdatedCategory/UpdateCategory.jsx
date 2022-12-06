// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";

// import { updateCategory } from "../../../API/apiService";

// const UpdateCategory = () => {
//   const [category_name, setCategory_name] = useState("");
//   const [category_desc, setCategory_desc] = useState("");
//   const [id, setID] = useState(null);

//   const update = async () => {
//     const updC = {
//       id: id,
//       category_name: category_name,
//       category_desc: category_desc,
//     };
//     await updateCategory(updC);
//     alert("updated");
//     setCategory_name("");
//     setCategory_desc("");
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name of the Category"
//         onChange={(e) => setCategory_name(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Category Description"
//         value={category_desc}
//         onChange={(e) => setCategory_desc(e.target.value)}
//       />
//       <button
//         type="submit"
//         onClick={() => {
//           update();
//         }}
//       >
//         Update
//       </button>
//     </div>
//   );
// };

// export default UpdateCategory;
