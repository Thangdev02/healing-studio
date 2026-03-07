import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/layer1.png", alt: "Top Layer" },
  { src: "/layer2.png", alt: "Middle Layer" },
  { src: "/layer3.png", alt: "Bottom Layer" },
];

const CardStackFeature = ({ initialStackState, hoverState }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {images.map((image, index) => {
        const layer = `layer${index + 1}`;

        const cardVariants = {
          stacked: {
            opacity: 1,
            ...(initialStackState[layer] || {
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }),
          },
          hovered: {
            opacity: 1,
            ...(hoverState[layer] || {
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }),
          },
        };

        return (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            variants={cardVariants}
            initial="stacked"
            whileHover="hovered"
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            style={{ zIndex: 30 - index * 10 }}
            className="
              absolute
              w-[495px]
              h-[370px]
              object-cover
              rounded-lg
              shadow-2xl
            "
          />
        );
      })}
    </div>
  );
};

export default CardStackFeature;
