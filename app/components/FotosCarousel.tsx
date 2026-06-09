"use client";

import { useRef } from "react";

const fotos = [
  "/images/foto-1.jpg",
  "/images/foto-2.jpg",
  "/images/foto-3.jpg",
  "/images/foto-4.jpg",
  "/images/foto-5.jpg",
  "/images/foto-6.jpg",
];

export default function FotosCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    if (!ref.current) return;
    isDown.current = true;
    ref.current.style.cursor = "grabbing";
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  }

  function onMouseLeave() {
    if (!ref.current) return;
    isDown.current = false;
    ref.current.style.cursor = "grab";
  }

  function onMouseUp() {
    if (!ref.current) return;
    isDown.current = false;
    ref.current.style.cursor = "grab";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = x - startX.current;
    ref.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div
      ref={ref}
      className="fotos-carousel flex gap-2.5 overflow-x-auto scroll-smooth pb-4 cursor-grab select-none"
      style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "thin", scrollbarColor: "#c9913a transparent" }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {fotos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Foto-lembrança Lembre-Lembre ${i + 1}`}
          draggable={false}
          className="flex-none w-[260px] h-[360px] object-cover rounded-xl brightness-[.88] hover:brightness-100 hover:scale-[1.03] transition-all duration-300"
          style={{ scrollSnapAlign: "start" }}
        />
      ))}
    </div>
  );
}
