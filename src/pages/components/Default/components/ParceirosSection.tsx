import peopleBussines from '../../../../assets/images/peopleBussines.png';

export const ParceirosSection = () => {
  return (
    <section className="bg-c-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* textos */}
        <div className="flex flex-col items-center justify-center w-2/3">
          <h1 className="font-black text-3xl sm:text-4xl mb-1 leading-8 sm:leading-10 text-start">
            Nossos parceiros possuem todo suporte necessário para alcançar o
            sucesso nas vendas.
          </h1>
          <p className="text-sm sm:text-lg text-gray-600">
            Contamos com uma equipe totalmente especializada em vendas que
            acompanhará cada etapa para a realização da sua venda.
          </p>
        </div>

        {/* imagem */}
        <div className="relative font-serif">
          <div className="bg-red-700 w-40 h-20 p-3 flex items-center justify-center text-center rounded-xl absolute right-0 bottom-1 sm:-right-20 sm:top-32">
            <p className="font-black text-white leading-5">
              Diversas estratégias de vendas
            </p>
          </div>
          <img
            className="w-96 mt-3"
            src={peopleBussines}
            alt="trabalhadores de terno"
          />
          <div className="bg-red-700 w-44 h-20 p-3 flex items-center justify-center text-center rounded-xl absolute bottom-1 sm:-left-14 sm:bottom-3">
            <p className="font-black text-white leading-5">
              Possuímos a melhor comissão do mercado
            </p>
          </div>
        </div>
      </div>

      {/* div bg vermelho */}
      <div className="bg-white h-28 w-full flex items-center justify-center">
        <h1 className="font-black text-xl text-red-600 sm:text-3xl w-full sm:w-2/4 text-center">
          Oportunidade única para quem deseja realmente mudar de vida.
        </h1>
      </div>
    </section>
  );
};
