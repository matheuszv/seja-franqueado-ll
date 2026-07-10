"use client";

import { useRef } from "react";

const fotos = [
  "/assets/FOTOS/FOTOS LL (1).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (7).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (9).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (10).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (13).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (14).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (15).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (16).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (17).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (18).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (19).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (20).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (21).jpg.jpeg",
  "/assets/FOTOS/FOTOS LL (22).jpg.jpeg",
];

export default function FotosCarousel({ fotos }: { fotos: string[] }) {
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
          className="flex-none w-[260px] h-[360px] object-cover brightness-[.88] hover:brightness-100 transition-all duration-300"
          style={{ scrollSnapAlign: "start" }}
        />
      ))}
    </div>
  );
}
