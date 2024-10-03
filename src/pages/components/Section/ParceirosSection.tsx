import peopleBussines from "../../../assets/images/peopleBussines.png";

export const ParceirosSection = () => {
  return (
    <section
      className="bg-c-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
      aria-labelledby="parceiros-title"
    >
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* Título e descrição */}
        <div className="flex flex-col items-center justify-center w-2/3">
          <h1
            id="parceiros-title"
            className="font-black text-3xl sm:text-4xl mb-1 leading-8 sm:leading-10 text-center"
          >
            Nossos parceiros possuem todo suporte necessário para alcançar o
            sucesso nas vendas.
          </h1>
          <p className="text-sm sm:text-lg text-cinza text-center">
            Contamos com uma equipe totalmente especializada em vendas que
            acompanhará cada etapa para a realização da sua venda.
          </p>
        </div>

        {/* Imagem e legendas */}
        <div className="relative font-serif">
          {/* Box à direita */}
          <div
            className="bg-vermelho hover:scale-95 hover:transition-all hover:delay-150 w-40 h-20 p-3 flex items-center justify-center text-center rounded-xl absolute right-0 bottom-1 sm:-right-20 sm:top-32"
            aria-label="Diversas estratégias de vendas"
          >
            <p className="font-black text-white leading-5">
              Diversas estratégias de vendas
            </p>
          </div>

          {/* Imagem de negócios */}
          <img
            className="w-96 mt-3"
            src={peopleBussines}
            alt="Profissionais de negócios trabalhando em parceria"
          />

          {/* Box à esquerda */}
          <div
            className="bg-vermelho hover:scale-95 hover:transition-all hover:delay-150 w-44 h-20 p-3 flex items-center justify-center text-center rounded-xl absolute bottom-1 sm:-left-14 sm:bottom-3"
            aria-label="Possuímos a melhor comissão do mercado"
          >
            <p className="font-black text-white leading-5">
              Possuímos a melhor comissão do mercado
            </p>
          </div>
        </div>
      </div>

      {/* Seção de chamada final */}
      <div className="bg-white h-28 w-full flex items-center justify-center">
        <h1 className="font-black text-xl text-vermelho sm:text-3xl w-full sm:w-2/4 text-center">
          Oportunidade única para quem deseja realmente mudar de vida.
        </h1>
      </div>
    </section>
  );
};
