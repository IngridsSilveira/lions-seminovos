import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="w-full h-74 sm:h-36 bg-slate-800 text-white p-2"
      aria-labelledby="footer-title"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-around gap-3">
        {/* Titulo */}
        <h1 className="font-playwrite shadow-lg shadow-white text-3xl">
          Lions <br />
          Seminovos
        </h1>

        {/* Sobre */}
        <nav aria-label="Sobre a empresa">
          <h2 className="text-lg underline cursor-pointer">Sobre</h2>
          <p>Conheça mais sobre a Lions Seminovos</p>
        </nav>

        {/* Informações de contato */}
        <address className="not-italic">
          <h2 className="text-lg underline cursor-pointer">Contate-nos</h2>
          <div
            className="flex items-center gap-1"
            aria-label="Telefone de contato"
          >
            <BiSolidPhoneCall aria-hidden="true" />
            <p>(00) 0000-0000</p>
          </div>
          <div
            className="flex items-center gap-1"
            aria-label="Endereço de e-mail"
          >
            <MdEmail aria-hidden="true" />
            <p>lionsseminovos@email.com</p>
          </div>
        </address>
      </div>

      {/* Direitos autorais */}
      <div className="flex items-center justify-center gap-1 mt-2">
        <p>© 2024 por Ingrid Souza</p>
        <a
          href="https://www.linkedin.com/in/ingridssilveira/"
          target="_blank"
          rel="noreferrer"
          aria-label="Perfil do LinkedIn de Ingrid Souza"
        >
          <FaLinkedin
            size={25}
            className="cursor-pointer text-white hover:text-azul hover:scale-110"
          />
        </a>
      </div>
    </footer>
  );
};
