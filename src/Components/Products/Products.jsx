/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  fetchCategory,
  fetchProducts,
  filterData,
} from "../../API/apiService";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import Navigation from "../Navigation/Navigation";
const Products = () => {
  const [category_id, setCategory_id] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actionType, setactionType] = useState(null);
  const [selectedProduct, setselectedProduct] = useState({});
  const [categoriesData, setCategoriesData] = useState([]);

  /*currentPage */
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  /* Search */
  const [search, setSearch] = useState("");
  /*Sort Status */
  const [SortStatus, setSortStatus] = useState(true);

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      setIsLoading(true);
      const data = await fetchCategory();
      setIsLoading(false);
      setCategoriesData(data);
    } catch (e) {
      setIsLoading(false);
      // console.log(e);
    }
  };
  // console.log(categoriesData);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchProducts();
      console.log(data);
      setIsLoading(false);
      setProductsData(data);
    } catch (e) {
      setIsLoading(false);
    }
  };
  // console.log(productsData);

  const showFilteredProducts = async (category_id) => {
    try {
      setIsLoading(true);
      const data = await filterData(category_id);
      console.log(data);
      setIsLoading(false);
      setProductsData(data);
      // setshownData(data);
    } catch (e) {
      setIsLoading(false);
    }
  };

  const deleteC = async (product_id) => {
    await deleteProduct(product_id);
    alert("Deleted");
    await getAllProducts();
    setactionType(null);
  };

  const indexofLastPost = currentPage * postPerPage;

  const indexOffFirstPage = indexofLastPost - postPerPage;

  const currentPost = productsData.slice(indexOffFirstPage, indexofLastPost);

  const pageinate = (pages) => setcurrentPage(pages);

  const Asc = () => {
    let price = productsData.sort((a, b) => a.product_price - b.product_price);
    setProductsData(price);
    setSortStatus(!SortStatus);
  };

  const Dsc = () => {
    let price = productsData.sort((a, b) => b.product_price - a.product_price);
    setProductsData(price);
    setSortStatus(!SortStatus);
  };

  const AscName = () => {
    let name = productsData.sort((a, b) =>
      a.product_name > b.product_name ? 1 : -1
    );
    setProductsData(name);
    setSortStatus(!SortStatus);
  };

  const DscName = () => {
    let name = productsData.sort((a, b) =>
      a.product_name < b.product_name ? 1 : -1
    );
    setProductsData(name);
    setSortStatus(!SortStatus);
  };

  /*Filter Add Data */

  // const productCategoryID = async (category_id) => {
  //   // console.log(category_id);
  //   await filterData(category_id);
  // };
  // productCategoryID.map((a,b)=>{
  //   console.log(a)
  // })
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>List of Products</h2>
        <div className="searchContent mt-3 w-50">
          <input
            type="search"
            value={search}
            placeholder="Enter a product to search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="d-flex ">
        {/* sort by category */}
        <select
          className="w-25 m-3"
          value={category_id}
          onChange={(e) => {
            setCategory_id(e.target.value);
            // productCategoryID(e.target.value);
            showFilteredProducts(e.target.value);
          }}
        >
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
        <div className="sort  ">
          <div className="Price">
            <p>Price</p>
            <button
              className="mx-3 button"
              onClick={() => {
                Asc();
              }}
            >
              &#9650;
            </button>
            <button
              className="mx-3 button"
              onClick={() => {
                Dsc();
              }}
            >
              &#9660;
            </button>
          </div>
          <div className="Name">
            <p>Name</p>
            <button
              className="mx-3 button"
              onClick={() => {
                AscName();
              }}
            >
              &#9650;
            </button>
            <button
              className="mx-3 button"
              onClick={() => {
                DscName();
              }}
            >
              &#9660;
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        {!isLoading && (
          <table>
            <thead>
              <tr>
                <td>Product ID</td>
                <td>Product Image</td>
                <td>Product Name</td>
                <td>Product Description </td>
                <td>Product Price </td>

                <td className="action" colSpan={2}>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {currentPost
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.product_name.toLowerCase().includes(search) ||
                        item.product_id.toLowerCase().includes(search);
                })

                .map((value, index) => (
                  <tr key={index}>
                    <td>{value.product_id}</td>
                    <td>
                      <img
                        className="product_image"
                        src={value.product_image}
                        alt="product_image"
                      />
                    </td>

                    <td>{value.product_name}</td>
                    <td>{value.product_desc}</td>

                    <td>{value.product_price}</td>
                    <td>
                      <button
                        onClick={() => {
                          setactionType("update");
                          setselectedProduct(value);
                        }}
                        className="success"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="danger"
                        onClick={() => {
                          deleteC(value.product_id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              {isLoading && <div>Data is Loading</div>}
            </tbody>
          </table>
        )}

        <Navigation
          postPerPage={postPerPage}
          total={productsData.length}
          pageinate={pageinate}
        />
      </div>
      <button
        onClick={() => {
          setactionType("new");
        }}
      >
        Add New Product
      </button>{" "}
      <br />
      <br />
      {actionType !== null && (
        <UpdateProduct
          categoriesData={categoriesData}
          selectedProduct={selectedProduct}
          actionType={actionType}
          setactionType={setactionType}
          getAllProducts={getAllProducts}
        />
      )}
    </div>
  );
};

export default Products;
