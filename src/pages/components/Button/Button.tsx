interface ButtonProps {
    texto: string;
    width: string;
}
export const Button: React.FC<ButtonProps> = ({texto, width}) => {
    return (
        <button className={`py-3 bg-red-700 hover:bg-red-800 rounded-xl text-white m-auto`}
        style={{ width }}>
        <a href="https://www.lionsseminovos.com.br/">{texto}</a>
      </button>
    )
}