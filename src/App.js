// Importing stylings
import "./App.css";
// Importing Axios for Api Calls
import axios from "axios";
// Importing useState Hooks for State management
import { useState } from "react";
// bootstrap
import Container from "react-bootstrap/Container";
import ShowData from "./Components/ShowData";
import DataInputForm from "./Components/DataInputForm";
// notifications
import { NotificationContainer } from "react-notifications";
// notification css
import "react-notifications/lib/notifications.css";
// notifications
import { NotificationManager } from "react-notifications";

function App() {
  // UseState Management
  const [dateTime, setDateTime] = useState(new Date());
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [tzone, setTzone] = useState("");
  const [show, setShow] = useState(false);
  const [astroDetails, setAstroDetails] = useState({});
  const [details, setDetails] = useState({});
  // Birth Input Visibility Handler
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // API Authentication Info
  const userId = "620511";
  const apiKey = "2d6fd737ad1361fb8aa3ebde66128be0";

  // let data = {
  //   day: dateTime.getDate(),
  //   month: dateTime.getMonth(),
  //   year: dateTime.getFullYear(),
  //   hour: dateTime.getHours(),
  //   min: dateTime.getMinutes(),
  //   lat: lat,
  //   lon: lon,
  //   tzone: tzone,
  // };

  // Api calls Function
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
        api === "astro_details"
          ? setAstroDetails(res.data)
          : setDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
        NotificationManager.error("Somthing Went Wrong", "Error", 3000);
      });
  };
  // Birth data Handler
  const handlesubmit = () => {
    console.log("this is date time", dateTime.getHours());
    if (lat === "" || lon === "" || tzone === "") {
      NotificationManager.error("Please Fill all input Fields", "Error", 3000);
    } else {
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
      fetchData(data, "birth_details");
      NotificationManager.success("Birth details are added!", "Success", 3000);
    }

    setLat("");
    setLon("");
    setTzone("");
    handleClose();
  };

  return (
    <div className="App">
      <Container style={styles.appContainer}>
        <ShowData
          handleShow={handleShow}
          astroDetails={astroDetails}
          details={details}
        />
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
        <NotificationContainer />
      </Container>
    </div>
  );
}
// styles
const styles = {
  appContainer: {
    height: "800px",
    borderRadius: "10px ",
    marginTop: "15px",
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
