import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

function useMouse(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, []);

  return mousePosition;
}

export {useMouse};
