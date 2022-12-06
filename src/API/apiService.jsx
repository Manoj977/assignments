import axios from "axios";

const axiosParseData = axios.create({
  baseURL: "http://localhost:3001",
});
const fetchCategory = async () => {
  return axiosParseData
    .get("/categories/", {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
const fetchProducts = async () => {
  return axiosParseData
    .get("/Products/", {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

const addCategory = async (newCategoryData) => {
  return axiosParseData
    .post("/addnewCategory/", newCategoryData)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
};
const addProduct = async (newData) => {
  console.log(newData);
  return axiosParseData
    .post("/addnewproduct", newData)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
};

const updateCategory = async (updateCategoryData) => {
  return axiosParseData
    .put("/categories/" + updateCategoryData.category_id, updateCategoryData)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
};
const updateProduct = async (updateProductData) => {
  console.log(updateProductData);
  return axiosParseData
    .put("/Products/" + updateProductData.product_id, updateProductData)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
};
const deleteCategory = async (category_id) => {
  return axiosParseData
    .delete("/categories/" + category_id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
};
const filterData = async (category_id) => {
  return axiosParseData
    .get("/products/" + category_id)
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((e) => {
      console.log("Error: " + e);
      throw e;
    });
};

const deleteProduct = async (product_id) => {
  return axiosParseData
    .delete("/Products/" + product_id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
};
export {
  fetchCategory,
  fetchProducts,
  addCategory,
  addProduct,
  updateCategory,
  updateProduct,
  deleteCategory,
  deleteProduct,
  filterData,
};
