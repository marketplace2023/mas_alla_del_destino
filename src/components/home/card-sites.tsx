import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  alt?: string;
  href?: string;
}

/**
 * Component to display a product card with image, name and price
 */
export const ProductCard = ({
  image,
  name,
  price,
  alt = "Product image",
  href = "#",
}: ProductCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
      <Link href={href} className="block h-full">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col">
          <h3 className="text-base font-medium text-gray-800">{name}</h3>
          <p className="text-xl font-bold text-gray-900 mt-1">{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
