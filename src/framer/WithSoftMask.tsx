"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import type { ComponentType } from "react";

export function withSoftMask<T extends object>(
  Component: ComponentType<T>
): ComponentType<T> {
  const WrappedComponent = (props: T) => {
    const maskX = useMotionValue(0);
    const maskY = useMotionValue(0);
    const maskSize = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(circle ${maskSize}px at ${maskX}px ${maskY}px, black, black 50%, transparent 80%)`;
    const ref = useRef<HTMLDivElement>(null);

    return (
      <motion.div
        ref={ref}
        onHoverStart={() => {
          animate(maskSize, 300, {
            duration: 0.3,
            ease: "easeOut",
          });
        }}
        onHoverEnd={() => {
          animate(maskSize, 0, {
            duration: 0.3,
            ease: "easeIn",
          });
        }}
        onPointerMove={(e) => {
          if (ref.current) {
            const { top, left } = ref.current.getBoundingClientRect();
            maskX.set(e.clientX - left);
            maskY.set(e.clientY - top);
          }
        }}
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          WebkitMaskSize: "100%",
          maskSize: "100%",
          WebkitMaskComposite: "destination-out",
          maskComposite: "destination-out",
        }}
      >
        <motion.div
          initial={{ color: "#000000" }} //
          // initial={{ color: "#b0b0b0" }} // Ash color
          // whileHover={{ color: "#000000" }} // Black color
          // transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Component {...props} />
        </motion.div>
      </motion.div>
    );
  };

  WrappedComponent.displayName = `withSoftMask(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
}
