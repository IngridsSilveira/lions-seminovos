import { Button } from "../../Button/Button";

export const CategoriaSection = () => {
  return (
    <section className="bg-c-background bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center p-4">
        {/* textos */}
          <h1 className="font-black text-3xl sm:text-4xl mb-4 leading-8 sm:leading-10 text-start">
            Conheça nossas categorias
          </h1>
        <div className="flex gap-4 mb-4">
            <div className="bg-slate-400 h-32 w-32"></div>
            <div className="bg-slate-400 h-32 w-32"></div>
            <div className="bg-slate-400 h-32 w-32"></div>
        </div>
        <Button texto="Clique para saber mais" width="15rem"/>
      </div>
    </section>
  );
};
