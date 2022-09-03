import React from "react";
// bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Importing List Item Component
import ListItem from "./ListItem";

const AstroDetails = ({ astroDetails }) => {
  return (
    <>
      <h1 style={styles.heading}>Astrology Details</h1>
      <Row style={styles.row}>
        <Col style={styles.col}>
          <ListItem name={"Charan"} value={astroDetails["Charan"]} />
          <ListItem name={"Gan"} value={astroDetails["Gan"]} />
          <ListItem name={"Karan"} value={astroDetails["Karan"]} />
          <ListItem name={"Nadi"} value={astroDetails["Nadi"]} />
          <ListItem name={"Naksahtra"} value={astroDetails["Naksahtra"]} />
          <ListItem
            name={"NaksahtraLord"}
            value={astroDetails["NaksahtraLord"]}
          />
          <ListItem name={"SignLord"} value={astroDetails["SignLord"]} />
          <ListItem name={"Tithi"} value={astroDetails["Tithi"]} />
          <ListItem name={"Varna"} value={astroDetails["Varna"]} />
          <ListItem name={"Vashya"} value={astroDetails["Vashya"]} />
        </Col>
        <Col style={styles.col}>
          <ListItem name={"Yog"} value={astroDetails["Yog"]} />
          <ListItem name={"Yoni"} value={astroDetails["Yoni"]} />
          <ListItem name={"ascendant"} value={astroDetails["ascendant"]} />
          <ListItem
            name={"ascendant_lord"}
            value={astroDetails["ascendant_lord"]}
          />
          <ListItem
            name={"name_alphabet"}
            value={astroDetails["name_alphabet"]}
          />
          <ListItem name={"paya"} value={astroDetails["paya"]} />
          <ListItem name={"sign"} value={astroDetails["sign"]} />
          <ListItem name={"tatva"} value={astroDetails["tatva"]} />
          <ListItem name={"yunja"} value={astroDetails["yunja"]} />
        </Col>
      </Row>
    </>
  );
};
//  Stylings
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

export default AstroDetails;
