import "./Formulario.css";
import CampoTexto from "../CampoTexto";
// Aquí iría indexedDB.jsx pero no es necesario colocar el nombre del archivo

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Completa el formulario para crear el colaborador</h2>
        <CampoTexto />
        <CampoTexto />
        <CampoTexto />
      </form>
    </section>
  );
};

export default Formulario;
