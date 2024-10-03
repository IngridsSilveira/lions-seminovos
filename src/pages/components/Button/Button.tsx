interface ButtonProps {
  texto: string;
  width: string;
}
export const Button: React.FC<ButtonProps> = ({ texto, width }) => {
  return (
    <a
      className={`py-3 bg-vermelho text-white font-bold font-roboto hover:bg-red-600 hover:transition-all hover:delay-150 rounded-xl text-white m-auto text-center`}
      style={{ width }}
      href="https://www.lionsseminovos.com.br/"
      aria-label="Visite nosso site"
    >
      {texto}
    </a>
  );
};
