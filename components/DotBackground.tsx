import React from "react";

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white bg-dot-black/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
      {children}
    </div>
  );
}
