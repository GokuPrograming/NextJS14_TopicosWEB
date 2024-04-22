import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" passHref>
              <span className="text-xl font-semibold cursor-pointer">Logo</span>
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" passHref>
              <span className="hover:text-gray-300 cursor-pointer">Inicio</span>
            </Link>
            <Link href="/pages/Acerca_de" passHref>
              <span className="hover:text-gray-300 cursor-pointer">Acerca de</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="hover:text-gray-300 cursor-pointer">Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
