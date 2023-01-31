import Link from "next/link";
const Footer = () => {
    return (
      <footer className="bg-black text-white  p-4 w-full ">
        <div className="container mx-auto text-xs">
          <div className="flex justify-between items-center">
            <p>Copyright © {new Date().getFullYear()} TDL2627</p>
            <div>
            <Link href="/terms-of-service">
              <p className="text-white text-xs font-medium mr-4">Terms of Service</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-white font-medium">Privacy Policy</p>
            </Link>
          </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;