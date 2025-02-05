import "./Colaborador.css";
import { IoMdCloseCircle } from "react-icons/io";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Colaborador = (props) => {
  // Aquí yo eliminé equipo de la const que sigue:
  const { nombre, puesto, foto, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;
  return (
    <div className="colaborador">
      {/* Con la arrow function dentro del onClick, sólo se eliminará cuando el usuario haga click */}
      <IoMdCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        { fav ? <GoHeartFill color="red" onClick={() => like(id)}/> : <GoHeart onClick={() => like(id)}/>}
        
      </div>
    </div>
  );
};

export default Colaborador;
