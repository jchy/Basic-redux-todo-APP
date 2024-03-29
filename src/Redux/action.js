export const actionContants = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS"
};

export const addTodo = ({ title, status, id }) => {
  return {
    type: actionContants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};
export const removeTodo = (id) => {
  return {
    type: actionContants.REMOVE_TODO_ITEM,
    payload: {
      id: id
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionContants.TOGGLE_TODO_STATUS,
    payload: {
      id: id
    }
  };
};
