import { useState, useEffect } from "react";
import {Button} from "../../index";

export const ParceirosSection = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Limpar o evento quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <section className="bg-c-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      {/* div itens */}
      <div className="w-full flex items-center justify-center p-3">
        {/* div texto e botão */}

        <div className="font-sans flex flex-col items-center justify-center gap-3">
          {/* textos */}
          <div>
            <h1 className="font-black text-3xl sm:text-4xl mb-1 leading-8 sm:leading-10 text-start">
              Fature muito com a <br />
              melhor concessionaria <br />
              de seminovos do Brasil
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 break-words max-w-96">
              Um portal pensado exclusivamente em quem deseja crescer junto com
              a Lions Seminovos, a rede que mais cresce no Brasil.
            </p>
          </div>
          {/* botão */}
         <Button texto="Clique aqui" />
        </div>

        {/* imagem */}
        {windowWidth >= 768 && (
          <img className="w-72" src="" alt="garota apontando" />
        )}
      </div>

      {/* div bg vermelho */}
      <div className="bg-red-800 text-white p-3 h-28 w-full flex items-center justify-around">
       
      </div>
    </section>
  );
};
