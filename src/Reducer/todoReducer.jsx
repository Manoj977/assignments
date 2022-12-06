/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
const initalState = {
  todos: [],
};
export default function todoReducer(state = initalState, action) {
  switch (action.type) {
    case `add_todo`:
      const todosList = [...state.todos];
      todosList.push(action.data);
      return { ...state, todos: todosList };
    case `delete_todo`:
      const removeTodosList = state.todos.filter(
        (item) => item.id !== action.data
      );
      return { ...state, todos: removeTodosList };
    case "update_todo":
      const updateTodosList = state.todos.map((item) => {
        if (item.id === action.data) {
          const obj = { ...item };
          obj.isCompleted = true;
          return obj;
        }
      });
      return { ...state, todos: updateTodosList };

    default:
      return state;
  }
}
