import { useState } from "react";
import "./styles.css";
import useDeepStreamData from "./useDeepStreamData";

export default function App() {
  const [streaming, setStreaming] = useState(false);

  const data = useDeepStreamData(100, streaming);

  const xAxis = data?.coordinate.x ?? 0;
  const yAxis = data?.coordinate.y ?? 0;

  const onStartStreaming = () => {
    setStreaming((prevStreaming) => !prevStreaming);
  };

  return (
    <div className="App">
      <div id="container">
        <button id="startStopButton" onClick={onStartStreaming}>
          {streaming ? "Stop" : "Start"}
        </button>
        <div
          id="coordinateContainer"
          className=""
          style={{
            zIndex: 0,
            position: "absolute",
            transform: `translate(${xAxis}px, ${yAxis}px)`,
          }}
        />
        <div className="metadata">
          <p>
            gpuTemp: <span>{data?.gpuTemp ?? 0.0} °C</span>
          </p>
          <p>
            pipelineFPS: <span>{data?.pipelineFPS ?? 0}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
