import { Card, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { EvDet } from "../interfaces/EvDet";
import { EventDetails } from "./EventDetails";

export const EventsList = () => {
  const [selected, setSelected] = useState<{ selected: null | number; show: boolean }>({ selected: null, show: false });
  const [events, setEvents] = useState<EvDet[] | null>(null);
  const [eventDetail, setEventDetail] = useState<EvDet | null>(null);

  const fetchEvents = async () => {
    try {
      let queryApi = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      let res = await queryApi.json();
      setEvents(res);
    } catch (e) {
      alert(e);
    }
  };

  const fetchDetails = async (id: null | number) => {
    if (typeof selected.selected === "number") {
      try {
        let queryApi = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
        let res = await queryApi.json();
        setEventDetail(res);
      } catch (e) {
        alert(e);
      }
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    fetchDetails(selected.selected);
  }, [selected.selected]);

  return (
    <Row className="d-flex justify-content-center wrap">
      {events &&
        events.map((event: EvDet) => (
          <Card
            style={{ width: "12rem", margin: "20px", padding: "0", fontSize: "12px" }}
            key={event.id}
            onClick={() => {
              setSelected({ selected: event.id, show: true });
            }}
          >
            <Card.Img variant="top" src={event.imageUrl} style={{ aspectRatio: "2/1", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "16px" }}>{event.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      <EventDetails event={eventDetail} show={selected.show} hide={setSelected} />
    </Row>
  );
};
