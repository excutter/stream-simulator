import { useEffect, useState } from "react";

type Coordinate = {
  x: number;
  y: number;
};
type Data = {
  objectCount: number;
  trackingId: string;
  coordinate: Coordinate;
  gpuTemp: number;
  pipelineFPS: number;
};

const useDeepStreamDataMock = (delay = 100, start = false) => {
  const [data, setData] = useState<Data>();
  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      const randomNumber = Math.random() * 5;
      const randomX = Math.random() * 400 + 50;
      const randomY = Math.random() * 400 + 50;
      const obj: Data = {
        objectCount: randomNumber,
        trackingId: "TRACK-AI",
        coordinate: { x: randomX, y: randomY },
        gpuTemp: 65.6,
        pipelineFPS: 120.5,
      };
      setData(obj);
    }, delay);

    if (!start) {
      console.log("STOP");
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [delay, start]);

  return data;
};

export default useDeepStreamDataMock;
