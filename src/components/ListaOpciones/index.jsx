import "./ListaOpciones.css";

//Método map para recorrer el arreglo de opciones
//arreglo.map ((equipo) => {
//...,
//...,
//...
//return <option></option>
//})
const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const manejarCambio = (e) => {
    // console.log("cambio", e.target.value);
    props.setEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
