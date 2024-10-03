import { Button } from "../Button/Button";
import bronze from "../../../assets/images/bronze2.png";
import prata from "../../../assets/images/prata2.png";
import ouro from "../../../assets/images/gold2.png";

export const CategoriaSection = () => {
  const categorias = [
    { name: "Bronze", image: bronze, color: "text-bronze", alt: "Medalha de bronze" },
    { name: "Prata", image: prata, color: "text-prata", alt: "Medalha de prata" },
    { name: "Ouro", image: ouro, color: "text-ouro", alt: "Medalha de ouro" },
  ];

  return (
    <section
      className="bg-c-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center p-4"
      aria-labelledby="categoria-title"
    >
      {/* Título da seção */}
      <h1
        id="categoria-title"
        className="font-black text-3xl sm:text-4xl mb-4 leading-8 sm:leading-10 text-start"
      >
        Conheça nossas categorias
      </h1>

      {/* Categorias */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4" role="list">
        {categorias.map((categoria) => (
          <article
            key={categoria.name}
            className="bg-slate-50 rounded-lg h-40 w-28 flex flex-col items-center justify-center gap-2 hover:scale-95 hover:transition-all hover:delay-150"
            aria-label={`Categoria ${categoria.name}`}
            role="listitem"
          >
            <img
              className="w-16"
              src={categoria.image}
              alt={categoria.alt}
            />
            <h2
              className={`${categoria.color} text-xl font-bold font-playwrite uppercase`}
            >
              {categoria.name}
            </h2>
          </article>
        ))}
      </div>

      {/* Botão */}
      <Button texto="Clique para saber mais" width="15rem" aria-label="Saiba mais sobre nossas categorias" />
    </section>
  );
};
