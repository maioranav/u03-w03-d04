import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.scss";
import { CustHeader } from "./components/CustHeader";
import { EventsList } from "./components/EventsList";

function App() {
  return (
    <div className="App">
      <Container>
        <CustHeader />
        <EventsList />
      </Container>
    </div>
  );
}

export default App;
