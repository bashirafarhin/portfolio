import { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [dot, setDot] = useState({ x: mouse.x, y: mouse.y });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.1,
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [mouse]);

  return (
    <>
      <div
        className="cursor-glow"
        style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }}
      ></div>
      <div
        className="cursor-dot"
        style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
