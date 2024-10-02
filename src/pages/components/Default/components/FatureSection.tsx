import { useState, useEffect } from "react";
import salary from "../../../../assets/images/salary.png";
import remote from "../../../..//assets/images/anywhere.png";
import high from "../../../..//assets/images/profits.png";
import girl from "../../../..//assets/images/womanPoint2.png";
import girlTop from "../../../..//assets/images/girlPointTop.png";
import { Button } from "../../index";

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
      <div className="w-full flex flex-col sm:flex-row items-center justify-center">
        {/* textos */}
        <div className="font-sans flex flex-col gap-2 p-5">
          <h1 className="font-black text-2xl sm:text-4xl mb-1 leading-8 sm:leading-10 text-start">
            Fature muito com a <br />
            melhor concessionaria <br />
            de seminovos do Brasil
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 text-start max-w-96 mb-3">
            Um portal pensado exclusivamente em quem deseja crescer junto com a
            Lions Seminovos, a rede que mais cresce no Brasil.
          </p>
          {/* botão */}
          <Button texto="Clique aqui" width="8rem" />
        </div>

        {/* imagem */}
        <div className="bg-red-600 flex justify-start rounded-full mt-5">
          {windowWidth < 640 ? (
            <img
              className="h-80 -mt-2"
              src={girlTop}
              alt="garota apontando para cima"
            />
          ) : (
            <img
              className="h-96 mr-14 -ml-16"
              src={girl}
              alt="garota apontando para esquerda"
            />
          )}
        </div>
      </div>

      {/* div bg vermelho */}
      <div className="bg-red-800 text-white w-full sm:w-screen h-28 flex items-center justify-around">
        <div className="flex items-center justify-center gap-1">
          <img className="w-14 ml-1" src={salary} alt="png dinheiro extra" />
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
