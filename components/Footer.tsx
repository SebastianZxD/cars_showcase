import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:gap-1 sm:px-10 px-6 py-10">
        <div className="flex flex-col sm:flex-wrap justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"/>
          <p className="text-base text-gray-700">
            CarHub 2024 <br />
            Todos los derechos reservados &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map ((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map ((item) => (
                <Link 
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>
        
        <div className="flex sm:flex-col-reverse justify-between items-center flex-wrap mt-10 border-t border-gray-100 md:px-13  px-6 py-10">
            <p className="md:mx-[10px] mr-5">@2024 CarHub. Todos los derechos reservados</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Política de Privacidad
            </Link>
            <Link href="/" className="text-gray-500">
              Términos de Servicio
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer