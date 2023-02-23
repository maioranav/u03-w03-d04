import { Modal, Button } from "react-bootstrap";
import { EvDet } from "../interfaces/EvDet";

export const EventDetails = (props: { event: null | EvDet; show: boolean; hide: Function }) => {
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
            <Modal.Footer>
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
