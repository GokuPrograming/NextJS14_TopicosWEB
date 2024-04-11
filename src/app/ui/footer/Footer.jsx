import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="#" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">Facebook</span>
            </Link>
            <Link href="#" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">Twitter</span>
            </Link>
            <Link href="#" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
