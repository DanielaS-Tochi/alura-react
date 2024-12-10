import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
  //Destructuración; para no usar tanto props.
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  const obj = {
    backgroundColor: colorSecundario,
  };
  const estiloTitulo = {
    borderColor: colorPrimario,
  };
  return (
    <section className="equipo" style={obj}>
      {/* Los estilos in-line van con camel case */}
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  );
};

export default Equipo;
