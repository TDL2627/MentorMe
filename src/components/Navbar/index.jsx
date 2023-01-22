import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
const Navigation = () => {
  return (
    <nav className="bg-black p-2 sticky w-full top-0 flex justify-between items-center">
    <Link href="/">
    <Image
        src={logo}
        alt="Picture of the author"
        width={50} 
        height={50} 
      />
    </Link>
    <div className="flex">
      <Link href="/about">
        <p className="text-white font-medium mr-4 cursor-pointer">About</p>
      </Link>
      <Link href="/contact">
        <p className="text-white font-medium cursor-pointer">Contact</p>
      </Link>
    </div>
  </nav>

  )
}

export default Navigation;