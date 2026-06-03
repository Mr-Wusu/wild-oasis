// LazyImage.tsx
import Image from "next/image";
import { getBlurDataURL } from "@/lib/cloudinary";

interface LazyImageProps {
  image: string;
  name: string;
}

async function LazyImage({ name, image }: LazyImageProps) {
  const blurDataURL = await getBlurDataURL(image);

  return (
    <Image
      src={image}
      alt={`Cabin ${name}`}
      className="object-cover"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
}

export default LazyImage;
