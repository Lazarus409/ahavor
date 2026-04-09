// components/Product.tsx
import Image from "next/image";

export default function Product() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold">Our Product</h2>

      <div className="mt-8 flex flex-col items-center">
        <Image
          src="/images/product.png"
          alt="Ahavor Tombrown"
          width={300}
          height={300}
        />

        <p className="mt-4 max-w-md">
          Made from Wheat, Rice, and Soybean. 100% Natural and highly
          nutritious.
        </p>
      </div>
    </section>
  );
}
