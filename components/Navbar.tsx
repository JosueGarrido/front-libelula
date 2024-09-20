export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white shadow-md fixed w-full z-10 top-0 left-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">LibelulaStore</a>
          <div className="space-x-6">
            <a href="/" className="hover:text-gray-300">Inicio</a>
            <a href="/" className="hover:text-gray-300">Carrito</a>
          </div>
        </div>
      </nav>
    );
  }
  