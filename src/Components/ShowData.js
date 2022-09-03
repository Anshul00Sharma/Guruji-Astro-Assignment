import React from "react";
// bootstrap

import ListItem from "./ListItem";
import { Route, Routes, Link } from "react-router-dom";
import AstroDetails from "./AstroDetails";
import BirthDetails from "./BirthDetails";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ShowData = ({ handleShow, astroDetails, details }) => {
  return (
    <div style={styles.details}>
      <ButtonGroup aria-label="Basic example" style={styles.ButtonGroup}>
        <Link to="/">
          <Button style={styles.button}>Astrology Details</Button>
        </Link>
        <Button style={styles.button} onClick={handleShow}>
          Change Birth Details
        </Button>
        <Link to="details">
          <Button style={styles.button}>Birth Detials</Button>
        </Link>
      </ButtonGroup>

      <Routes>
        <Route index element={<AstroDetails astroDetails={astroDetails} />} />
        <Route path="details" element={<BirthDetails details={details} />} />
      </Routes>
    </div>
  );
};
const styles = {
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  row: {
    padding: "0%",
    margin: "0%",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    // borderRadius: "10px",
    border: "none",
    padding: "7px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    backgroundColor: "rgb(59,114,163)",
    width: "220px",
    color: "rgb(217,175,115)",
  },
  ButtonGroup: {
    margin: "30px",
  },
};

export default ShowData;
