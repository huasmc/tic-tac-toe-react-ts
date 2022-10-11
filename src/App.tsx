import "./App.css";
import Board from "./components/board";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [playerToken, setPlayerToken] = useState<string>("");
  return (
    <div className="App">
      <Row className="token-selector">
        <Col xs={6}>
          <h2>Select your token:</h2>
        </Col>
        <Col>
          <button
            onClick={() => setPlayerToken("X")}
            disabled={playerToken !== ""}
          >
            X
          </button>
        </Col>
        <Col>
          <button
            onClick={() => setPlayerToken("O")}
            disabled={playerToken !== ""}
          >
            O
          </button>
        </Col>
      </Row>
      <Board playerToken={playerToken} />
    </div>
  );
}

export default App;
