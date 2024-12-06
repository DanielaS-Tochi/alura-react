import "./Formulario.css";
import CampoTexto from "../CampoTexto";
// Aquí iría index.jsx pero no es necesario colocar el nombre del archivo, lo toma por defecto
import ListaOpciones from "../ListaOpciones";
import Button from "../Button";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Completa el formulario para crear el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
        <ListaOpciones />
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Formulario;
