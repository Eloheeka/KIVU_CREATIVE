"use client";

import { useEffect } from "react";

export function MotionShell() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const tiltCards = Array.from(document.querySelectorAll<HTMLElement>(".tilt-card"));
    const ambientNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-ambient]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const handleTiltMove = (event: PointerEvent) => {
      if (window.innerWidth < 960) return;

      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 10;
      const rotateX = (0.5 - py) * 10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };

    const handleTiltLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = "";
    };

    tiltCards.forEach((card) => {
      card.addEventListener("pointermove", handleTiltMove);
      card.addEventListener("pointerleave", handleTiltLeave);
    });

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);

      ambientNodes.forEach((node, index) => {
        const offsetX = (x - 0.5) * (index === 0 ? 36 : index === 1 ? -28 : 18);
        const offsetY = (y - 0.5) * (index === 0 ? 28 : index === 1 ? -24 : 14);
        node.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      revealObserver.disconnect();
      tiltCards.forEach((card) => {
        card.removeEventListener("pointermove", handleTiltMove);
        card.removeEventListener("pointerleave", handleTiltLeave);
      });
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return null;
}
