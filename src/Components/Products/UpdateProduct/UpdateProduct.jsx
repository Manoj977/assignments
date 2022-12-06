/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { addProduct, updateProduct } from "../../../API/apiService";

const UpdateProduct = (props) => {
  const {
    selectedProduct,
    actionType,
    setactionType,
    getAllProducts,
    categoriesData,
  } = props;

  const [Productimage, setProductimage] = useState("");
  const [Productname, setProductname] = useState("");
  const [Productdescription, setProductdescription] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");

  useEffect(() => {
    if (actionType === "update") {
      setProductimage(selectedProduct.product_image);
      setProductname(selectedProduct.product_name);
      setProductdescription(selectedProduct.product_desc);
      setPrice(selectedProduct.product_price);
      setCategory(selectedProduct.category_id);
    }
  }, [actionType, selectedProduct]);

  const add = async () => {
    if (
      Productimage === "" ||
      Productname === "" ||
      Productdescription === "" ||
      Price === ""
    ) {
      alert("Field is Empty");
      setactionType(null);
    } else {
      const updtP = {
        product_image: Productimage,
        product_name: Productname,
        product_desc: Productdescription,
        product_price: Price,
        category_id: Category,
      };
      try {
        await addProduct(updtP);
        if (actionType === "new") {
        } else {
          const updateC = {
            ...updtP,
            product_id: selectedProduct.product_id,
          };
          await updateProduct(updateC);
          alert("updated");
          setactionType(null);
        }
        setactionType(null);
        getAllProducts();
        setProductimage("");
        setProductname("");
        setCategory("");
        setProductdescription("");
        setPrice("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="addProducts">
      <h1>
        {actionType === "new" ? "Add New Data" : "Update the Existing Data"}
      </h1>
      <label>Product Image</label>
      <input
        type="url"
        placeholder="Image of the Product"
        value={Productimage}
        onChange={(e) => {
          setProductimage(e.target.value);
        }}
      ></input>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Name of the Product"
        value={Productname}
        onChange={(e) => setProductname(e.target.value)}
      />

      <label>Product Category</label>

      <select
        value={Category}
        onChange={(e) => {
          let value = e.target.value;
          setCategory(value);
        }}
      >
        <option
          value={Category === "" ? Category : "Please Select the Category"}
        >
          Please Select the Category
        </option>
        {categoriesData.map((option, index) => (
          <option
            key={index}
            selected={selectedProduct.category_id === option.category_id}
            value={option.category_id}
          >
            {option.category_name}
          </option>
        ))}
      </select>
      <label>Product Description</label>
      <input
        type="text"
        value={Productdescription}
        placeholder="Product Description"
        onChange={(e) => setProductdescription(e.target.value)}
      />
      <label>Product Price</label>
      <input
        type="tel"
        value={Price}
        placeholder="₹"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      {actionType === "new" ? (
        <button onClick={add}>Add</button>
      ) : (
        <button onClick={add}>Update</button>
      )}
    </div>
  );
};

export default UpdateProduct;
