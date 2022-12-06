import React, { useEffect, useState } from "react";
import { deleteCategory, fetchCategory } from "../../API/apiService";
import NewCategory from "./NewCategory/NewCategory";

export const Category = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actionType, setactionType] = useState(null);
  const [selectedCategory, setselectedCategory] = useState({});

  useEffect(() => {
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
      console.log(e);
    }
  };

  const deleteC = async (category_id) => {
    await deleteCategory(category_id);
    await getAllCategories();
    setactionType(null);
  };

  return (
    <div className="categoryShown ">
      <h3>List of Category</h3>
      {isLoading && <div>Data is Loading</div>}
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <td>Category ID</td>
              <td>Category Name</td>

              <td className="action" colSpan={2}>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {categoriesData.map((value, index) => (
              <tr key={index}>
                <td>{value.category_id}</td>
                <td>{value.category_name}</td>
                <td>
                  <button
                    onClick={() => {
                      setactionType("update");
                      setselectedCategory(value);
                    }}
                    className="success"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteC(value.category_id);
                    }}
                    className="danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={() => {
          setactionType("new");
        }}
      >
        Click to Add New Category
      </button>

      {actionType !== null && (
        <NewCategory
          setactionType={setactionType}
          selectedCategory={selectedCategory}
          actionType={actionType}
          getAllCategories={getAllCategories}
        />
      )}
    </div>
  );
};

export default Category;
