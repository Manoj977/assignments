// import React, { useState } from "react";
// import { addProduct, filterData } from "../../../API/apiService";

// const AddProduct = () => {
//   const [Image, setImage] = useState("");
//   const [Name, setName] = useState("");
//   const [Model, setModel] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Category, setCategory] = useState("");
//   const add = async () => {
//     if (Name === "" || Model === "") {
//       alert("Field is Empty");
//     } else {
//       const add_Product = {
//         product_name: Name,
//         product_desc: Model,
//         product_price: Price,
//         product_image: Image,
//         category_id: Category,
//       };
//       try {
//         await addProduct(add_Product);
//         setName("");
//         setModel("");
//         setImage("");
//         setPrice("");
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };
//   const productCategoryID = async (category_id) => {
//     console.log(category_id);
//     await filterData(category_id);
//   };
//   return (
//     <div>
//       <div className="addCategories">
//         <h1>Add Product</h1>
//         <div className="addProducts_content">
//           <input
//             onChange={(e) => {
//               setImage(e.target.value);
//             }}
//             type="text"
//             value={Image}
//             placeholder="Product Image URL"
//           />
//           <br />
//           <input
//             type="text"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             value={Name}
//             placeholder="Name of the Product"
//           />
//           <br />
//           <select
//             defaultValue={"Please Select the Category"}
//             value={Category}
//             onChange={(e) => {
//               setCategory(e.target.value);
//               console.log(Category);
//               productCategoryID(Category);
//             }}
//           >
//             <option value={"Please Select the Category"}>
//               Please Select the Category
//             </option>
//             {/* {categoriesData.map((option, index) => (
//               <option
//                 key={index}
//                 selected={selectedProduct.category_id === option.category_id}
//                 value={option.category_id}
//               >
//                 {option.category_name} 
//               </option>
//             ))}*/}
//           </select>
//           <input
//             onChange={(e) => {
//               setModel(e.target.value);
//             }}
//             type="text"
//             value={Model}
//             placeholder="Product Model"
//           />
//           <br />
//           <input
//             onChange={(e) => {
//               setPrice(e.target.value);
//             }}
//             type="text"
//             value={Price}
//             placeholder="Product Price"
//           />
//           <button onClick={add}>Add a Product</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
