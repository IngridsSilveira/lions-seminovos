import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full h-72 sm:h-32 bg-slate-800 2 text-white p-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-around gap-3">
        <h1 className="font-playwrite shadow-lg shadow-white text-3xl text-red-600">Lions <br />Seminovos</h1>
        <div>
          <h2 className="text-lg underline cursor-pointer">About</h2>
          <p className="">Conheça mais sobre a Lions!!</p>
        </div>
        <div>
          <h2 className="text-lg underline cursor-pointer">Contate-nos</h2>
          <div className="flex items-center gap-1">
            <BiSolidPhoneCall />
            <p>(00)0000-0000</p>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail />
            <p>lionsseminovos@email.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 mt-2">
        © 2024 por Ingrid Souza
        <a
          href="https://www.linkedin.com/in/ingridssilveira/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} className="cursor-pointer text-white" />
        </a>
      </div>
    </footer>
  );
};
