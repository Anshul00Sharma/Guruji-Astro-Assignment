import React from "react";

const ListItem = ({ name, value }) => {
  return (
    <>
      <p style={listItemStyle}>
        <span style={{ color: "rgb(82,110,132)" }}>{name}</span>
        <span style={{ color: "rgb(54,99,148)" }}>
          {value ? value : "Enter Birth Details"}
        </span>
      </p>
    </>
  );
};
// Stylings
const listItemStyle = {
  display: "flex",
  padding: "10px",
  justifyContent: "space-between",
  width: "300px",
  margin: "10px",
  //   backgroundColor: "rgb(217,175,115)",
  background: "#E69A8DFF",

  boxShadow:
    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  borderRadius: "5px",
};

export default ListItem;
