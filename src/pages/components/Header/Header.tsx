import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [inputPesquisa, setInputPesquisa] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [inputCor, setInputCor] = useState<string>("");

  const listaPalavras = [
    "Fature",
    "lions",
    "seminovos",
    "parceiros",
    "categorias",
  ];

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPesquisa(e.target.value); // Valor do input
    setMensagem(""); // Limpar mensagem ao digitar
    setInputCor(""); // Resetar a cor do input
  };

  const buscarPalavra = () => {
    const palavraEncontrada = listaPalavras.find(
      (palavra) => palavra.toLowerCase() === inputPesquisa.toLowerCase()
    ); // Verifica se a palavra é igual ao valor do input

    if (palavraEncontrada) {
      setMensagem(`Palavra "${palavraEncontrada}" encontrada!`); // Modifica a mensagem para a palavra encontrada
      setInputCor("green"); // Altera a cor do input para verde
    } else {
      setMensagem("Palavra não encontrada!");
      setInputCor("black"); // Altera a cor do input para vermelho
    }
  };
  return (
    <Navbar expand="lg" className="bg-vermelho" variant="dark">
      <Container fluid>
        <Navbar.Brand href="https://www.lionsseminovos.com.br/" target="_blank">
          <img src={logo} alt="logo lion seminovos" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
              value={inputPesquisa}
              onChange={InputChange}
              style={{ backgroundColor: inputCor }}
            />
            <Button
              className="bg-slate-800 border-none hover:bg-slate-900 font-serif"
              onClick={buscarPalavra}
            >
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      {mensagem && <p className="text-center text-white">{mensagem}</p>}{" "}
      {/* Exibe a mensagem */}
    </Navbar>
  );
};
