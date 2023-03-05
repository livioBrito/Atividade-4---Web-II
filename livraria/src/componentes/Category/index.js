import Book from "../Book";
import "./index.css";

const Category = (props) => {
  // filtrar livros vazios
  const livrosNaoVazios = props.livros.filter((livro) => livro.autor !== "" && livro.titulo !== "");

  // retornar componente apenas se houver livros
  if (livrosNaoVazios.length === 0) {
    return null;
  }

  return (
    <section
      className="categoria"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="livros">
        {livrosNaoVazios.map((livro) => (
          <Book autor={livro.autor} titulo={livro.titulo} capa={livro.capa} />
        ))}
      </div>
    </section>
  );
};

export default Category;
