import React from "react";
import ListItem from "./ListItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BirthDetails = ({ details }) => {
  return (
    <>
      <h1 style={styles.heading}>Birth Details</h1>
      <Row style={styles.row}>
        <Col style={styles.col}>
          <ListItem name={"ayanamsha"} value={details["ayanamsha"]} />
          <ListItem name={"day"} value={details["day"]} />
          <ListItem name={"hour"} value={details["hour"]} />
          <ListItem name={"latitude"} value={details["latitude"]} />
          <ListItem name={"longitude"} value={details["longitude"]} />
          <ListItem name={"minute"} value={details["minute"]} />
          <ListItem name={"month"} value={details["month"]} />
        </Col>
        <Col style={styles.col}>
          <ListItem name={"seconds"} value={details["seconds"]} />
          <ListItem name={"hour"} value={details["hour"]} />
          <ListItem name={"sunrise"} value={details["sunrise"]} />
          <ListItem name={"sunset"} value={details["sunset"]} />
          <ListItem name={"timezone"} value={details["timezone"]} />
          <ListItem name={"year"} value={details["year"]} />
        </Col>
      </Row>
    </>
  );
};
const styles = {
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
    borderRadius: "10px",
    border: "none",
    padding: "7px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    backgroundColor: "rgb(59,114,163)",
    width: "220px",
    color: "rgb(217,175,115)",
  },
  heading: {
    color: "rgb(217,175,115)",
  },
};

export default BirthDetails;
