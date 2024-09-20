import Image from 'next/image';
import '../styles/globals.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            layout="responsive"
          />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
