import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NewCategory from "../Category/NewCategory/NewCategory";
import AddProduct from "../Products/Addproduct/AddProduct";
import Products from "../Products/Products";
import UpdateCategory from "../Category/UpdatedCategory/UpdateCategory";
import UpdateProduct from "../Products/UpdateProduct/UpdateProduct";

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="categories" element={<Category />}>
          <Route path="newCategory" element={<NewCategory />} />
        </Route>
          <Route path="update" element={<UpdateCategory/>}/>
        <Route path="Products" element={<Products />} >
          <Route path="AddProduct" element={<AddProduct/>}/>
        </Route>
        <Route path="updateProduct" element={<UpdateProduct/>}/>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Main;
