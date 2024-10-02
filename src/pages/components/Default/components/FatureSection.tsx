import { useState, useEffect } from "react";
import salary from "../../../../assets/images/salary.png";
import remote from "../../../..//assets/images/anywhere.png";
import high from "../../../..//assets/images/profits.png";
import girl from "../../../..//assets/images/womanPoint2.png";
import {Button} from "../../index";

export const FatureSection = () => {
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
          <img className="w-72" src={girl} alt="garota apontando" />
        )}
      </div>

      {/* div bg vermelho */}
      <div className="bg-red-800 text-white p-3 h-28 w-full flex items-center justify-around">
        <div className="flex items-center justify-center gap-1">
          <img className="w-14" src={salary} alt="png dinheiro extra" />
          <h2 className="text-xs sm:text-2xl w-28 sm:w-36 sm:leading-6 font-sans font-bold">
            Ganhe uma renda extra
          </h2>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img className="w-14" src={remote} alt="png trabalhe onde quiser" />
          <h2 className="text-xs sm:text-2xl w-28 sm:w-36 sm:leading-6 font-sans font-bold">
            Trabalhe de onde quiser
          </h2>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img className="w-14" src={high} alt="png custo alto" />
          <h2 className="text-xs sm:text-2xl w-28 sm:w-36 sm:leading-6 font-sans font-bold">
            Lucre alto
          </h2>
        </div>
      </div>
    </section>
  );
};
