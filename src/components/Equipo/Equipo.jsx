import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuración; para no usar tanto props.
  //Aquí eliminé colorSecundario (porque creo que no lo estábamos usando)
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, setColor } = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  };

  //console.log(colaboradores.length > 0);
  const estiloTitulo = {
    borderColor: colorPrimario,
  };
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input type="color" 
          className="input-color" 
          value={colorPrimario}
          onChange={(evento) => {
            setColor(evento.target.value, id)
          }} />

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
