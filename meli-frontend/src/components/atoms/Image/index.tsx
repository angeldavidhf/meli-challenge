import { Link } from "react-router-dom";

interface IImage {
  width: number;
  height: number;
  alt: string;
  image: string;
}

export default function Image({ width, height, alt, image }: IImage) {
  return (
    <>
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  );
}