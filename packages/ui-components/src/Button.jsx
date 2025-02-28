import React from "react";

export function Button({ children, onClick }) {
  return (
    <button style={{ padding: "10px", background: "blue", color: "white" }} onClick={onClick}>
      {children}
    </button>
  );
}
