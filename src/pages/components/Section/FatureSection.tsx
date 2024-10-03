import { useState, useEffect } from "react";
import salary from "../../../assets/images/salary.png";
import remote from "../../../assets/images/anywhere.png";
import high from "../../../assets/images/profits.png";
import girl from "../../../assets/images/womanPoint2.png";
import girlTop from "../../../assets/images/girlPointTop.png";
import { Button } from "../Button/Button";

export const FatureSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Limpa o evento quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Adiciona a dependência vazia para garantir que o evento só seja registrado uma vez

  return (
    <section
      className="bg-c-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
      aria-labelledby="fature-title"
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-center">
        {/* textos */}
        <div className="font-sans flex flex-col gap-2 p-5">
          <h1
            id="fature-title"
            className="font-black text-2xl sm:text-4xl mb-1 leading-8 sm:leading-10 text-start"
          >
            Fature muito com a <br />
            melhor concessionária <br />
            de seminovos do Brasil
          </h1>
          <p className="text-sm sm:text-lg text-cinza text-start max-w-96 mb-3">
            Um portal pensado exclusivamente em quem deseja crescer junto com a
            Lions Seminovos, a rede que mais cresce no Brasil.
          </p>
          {/* botão */}
          <Button texto="Clique aqui" width="8rem" />
        </div>

        {/* imagem */}
        <div className="bg-vermelho flex justify-start rounded-full mt-5">
          {windowWidth < 640 ? (
            <img
              className="h-80 -mt-2"
              src={girlTop}
              alt="Garota apontando para cima, incentivando a subir na carreira"
            />
          ) : (
            <img
              className="h-96 mr-14 -ml-16 hover:translate-x-6 hover:transition-all hover:delay-150"
              src={girl}
              alt="Garota apontando para a esquerda, promovendo oportunidades de crescimento"
            />
          )}
        </div>
      </div>

      {/* Seção de destaque */}
      <div className="bg-vermelho text-white w-full sm:w-screen h-28 flex items-center justify-around">
        <div className="flex items-center justify-center gap-1 hover:scale-95 hover:transition-all hover:delay-150">
          <img
            className="w-14 ml-1"
            src={salary}
            alt="Ícone de dinheiro extra, representando renda adicional"
          />
          <h2 className="text-xs sm:text-2xl w-28 sm:w-36 sm:leading-6 font-sans font-bold">
            Ganhe uma renda extra
          </h2>
        </div>
        <div className="flex items-center justify-center gap-1 hover:scale-95 hover:transition-all hover:delay-150">
          <img
            className="w-14"
            src={remote}
            alt="Ícone de localização, representando trabalho remoto"
          />
          <h2 className="text-xs sm:text-2xl w-28 sm:w-36 sm:leading-6 font-sans font-bold">
            Trabalhe de onde quiser
          </h2>
        </div>
        <div className="flex items-center justify-center gap-1 hover:scale-95 hover:transition-all hover:delay-150">
          <img
            className="w-14"
            src={high}
            alt="Ícone de lucros altos, representando grandes ganhos"
          />
          <h2 className="text-xs sm:text-2xl w-28 sm:w-36 sm:leading-6 font-sans font-bold">
            Lucre alto
          </h2>
        </div>
      </div>
    </section>
  );
};
