import React from "react";
// bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// Importing Date Picker React Component
import DateTimePicker from "react-datetime-picker";

const DataInputForm = ({
  show,
  handleClose,
  dateTime,
  setDateTime,
  handlesubmit,
  lat,
  setLat,
  lon,
  setLon,
  tzone,
  setTzone,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Birth Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <DateTimePicker
                onChange={setDateTime}
                value={dateTime}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInputGrid" label="Latitude">
                <Form.Control
                  type="text"
                  placeholder="latitude"
                  required
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingInputGrid" label="Logitude">
                <Form.Control
                  type="text"
                  placeholder="Logitude"
                  required
                  value={lon}
                  onChange={(e) => setLon(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingInputGrid" label="Time Zone">
                <Form.Control
                  type="text"
                  placeholder="Time Zone"
                  required
                  value={tzone}
                  onChange={(e) => setTzone(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlesubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DataInputForm;
