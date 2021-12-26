import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos);
  return (
    <div style={{ marginTop: "50px" }}>
      {todos.map((item) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                border: "1px solid gray",
                paddingLeft: "20px"
              }}
            >
              <h3>{item.title} - </h3>
              <h3>{item.status ? "DONE" : "PENDING"}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
};
