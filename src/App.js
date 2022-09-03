import "./App.css";
import axios from "axios";
import { useState } from "react";
// bootstrap
import Container from "react-bootstrap/Container";
import ShowData from "./Components/ShowData";
import DataInputForm from "./Components/DataInputForm";

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [tzone, setTzone] = useState("");
  const [show, setShow] = useState(false);
  const [astroDetails, setAstroDetails] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = "620511";
  const apiKey = "2d6fd737ad1361fb8aa3ebde66128be0";

  let data = {
    day: dateTime.getDate(),
    month: dateTime.getMonth(),
    year: dateTime.getFullYear(),
    hour: dateTime.getHours(),
    min: dateTime.getMinutes(),
    lat: lat,
    lon: lon,
    tzone: tzone,
  };
  const fetchData = async (data, api) => {
    await axios({
      method: "post",
      url: "https://json.astrologyapi.com/v1/" + api,
      data: JSON.stringify(data),
      headers: {
        authorization: "Basic " + btoa(userId + ":" + apiKey),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setAstroDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handlesubmit = () => {
    console.log("this is date time", dateTime.getHours());
    let data = {
      day: dateTime.getDate(),
      month: dateTime.getMonth(),
      year: dateTime.getFullYear(),
      hour: dateTime.getHours(),
      min: dateTime.getMinutes(),
      lat: lat,
      lon: lon,
      tzone: tzone,
    };

    fetchData(data, "astro_details");
    setLat("");
    setLon("");
    setTzone("");
    handleClose();
  };

  return (
    <div className="App">
      <Container style={styles.appContainer}>
        <ShowData handleShow={handleShow} astroDetails={astroDetails} />
        <DataInputForm
          show={show}
          handleClose={handleClose}
          dateTime={dateTime}
          setDateTime={setDateTime}
          handlesubmit={handlesubmit}
          lat={lat}
          setLat={setLat}
          lon={lon}
          setLon={setLon}
          tzone={tzone}
          setTzone={setTzone}
        />
      </Container>
    </div>
  );
}
// styles
const styles = {
  appContainer: {
    height: "750px",
    borderRadius: "10px ",
    marginTop: "40px",
    width: "1000px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    background: "rgb(87,208,255)",
    background:
      "radial-gradient(circle, rgba(87,208,255,1) 0%, rgba(54,99,148,1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignContent: "content",
    padding: "0px",
  },
};

export default App;
