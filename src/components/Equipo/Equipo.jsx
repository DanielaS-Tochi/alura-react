import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
  //Destructuración; para no usar tanto props.
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores, eliminarColaborador } = props;

  const obj = {
    backgroundColor: colorSecundario,
  };

  console.log(colaboradores.length > 0);
  const estiloTitulo = {
    borderColor: colorPrimario,
  };
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          {/* Los estilos in-line van con camel case */}
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
