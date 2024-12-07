import "./ListaOpciones.css";

//Método map para recorrer el arreglo de opciones
//arreglo.map ((equipo) => {
//...,
//...,
//...
//return <option></option>
//})
const ListaOpciones = () => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
