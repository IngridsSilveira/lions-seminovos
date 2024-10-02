interface ButtonProps {
    texto: string;
}
export const Button: React.FC<ButtonProps> = ({texto}) => {
    return (
        <button className="py-3 px-12 bg-red-700 hover:bg-red-800 rounded-xl text-white">
        <a href="https://www.lionsseminovos.com.br/">{texto}</a>
      </button>
    )
}