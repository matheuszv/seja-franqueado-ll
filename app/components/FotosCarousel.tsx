"use client";

import { useEffect, useRef } from "react";

const ITEM_WIDTH = 260;

export default function FotosCarousel({ fotos }: { fotos: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const correctionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setWidth = fotos.length * ITEM_WIDTH;
  const loopedFotos = [...fotos, ...fotos, ...fotos];

  useEffect(() => {
    ref.current?.scrollTo({ left: setWidth, behavior: "instant" });
  }, [setWidth]);

  function correctBounds() {
    const el = ref.current;
    if (!el) return;
    if (el.scrollLeft < setWidth * 0.5) {
      el.scrollTo({ left: el.scrollLeft + setWidth, behavior: "instant" });
    } else if (el.scrollLeft > setWidth * 1.5) {
      el.scrollTo({ left: el.scrollLeft - setWidth, behavior: "instant" });
    }
  }

  function onScroll() {
    if (correctionTimer.current) clearTimeout(correctionTimer.current);
    correctionTimer.current = setTimeout(correctBounds, 120);
  }

  function scrollByDirection(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + dir * ITEM_WIDTH, behavior: "smooth" });
  }

  function onMouseDown(e: React.MouseEvent) {
    if (!ref.current) return;
    isDown.current = true;
    ref.current.style.cursor = "grabbing";
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeftStart.current = ref.current.scrollLeft;
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
    ref.current.scrollTo({ left: scrollLeftStart.current - walk, behavior: "instant" });
  }

  return (
    <div className="relative group/carousel">
      <div
        ref={ref}
        className="fotos-carousel flex overflow-x-auto cursor-grab select-none"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {loopedFotos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Foto-lembrança Lembre-Lembre ${(i % fotos.length) + 1}`}
            draggable={false}
            className="flex-none w-[260px] h-[360px] object-cover brightness-[.88] hover:brightness-100 transition-all duration-300"
            style={{ scrollSnapAlign: "start" }}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Foto anterior"
        onClick={() => scrollByDirection(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(26,23,18,.55)] backdrop-blur-[6px] border border-white/25 text-white flex items-center justify-center transition-all hover:bg-[rgba(26,23,18,.85)] hover:scale-105 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Próxima foto"
        onClick={() => scrollByDirection(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(26,23,18,.55)] backdrop-blur-[6px] border border-white/25 text-white flex items-center justify-center transition-all hover:bg-[rgba(26,23,18,.85)] hover:scale-105 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
