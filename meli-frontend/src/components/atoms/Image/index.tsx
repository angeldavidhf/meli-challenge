interface IImage {
  width: number;
  height: number | "auto";
  alt: string;
  image: any;
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