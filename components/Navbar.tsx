import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white shadow-md fixed w-full z-10 top-0 left-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">LibelulaStore</Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-gray-300">Inicio</Link>
            <Link href="/" className="hover:text-gray-300">Carrito</Link>
          </div>
        </div>
      </nav>
    );
  }
  