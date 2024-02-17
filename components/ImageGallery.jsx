import React from "react";

export const ImageWithOverlay = ({ src, alt, text }) => {
  return (
    <div className="relative group">
      <img className="w-1/2" src={src} alt={alt} />
      <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-75 transition-opacity">
        <p className="text-white absolute bottom-5 left-0 right-0 text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
