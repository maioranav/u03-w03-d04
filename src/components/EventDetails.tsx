import { Modal, Button, Badge } from "react-bootstrap";
import { EvDet } from "../interfaces/EvDet";

export const EventDetails = (props: { event: null | EvDet; show: boolean; hide: Function }) => {
  let publishDate: string = props.event !== null ? new Date(props.event.publishedAt).toDateString() : "";

  return (
    <>
      {props.event !== null && (
        <div className="modal" style={{ display: "block", position: "initial" }}>
          <Modal
            show={props.show}
            onHide={() => {
              props.hide({ selected: null, show: false });
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>{props.event.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={props.event.imageUrl} className="w-100 mb-3" alt="Article" />
              <p>{props.event.summary} </p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              <Badge bg="secondary">Published: {publishDate !== "" ? publishDate : "N/A"}</Badge>
              <Button
                variant="secondary"
                onClick={() => {
                  props.hide({ selected: null, show: false });
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};
