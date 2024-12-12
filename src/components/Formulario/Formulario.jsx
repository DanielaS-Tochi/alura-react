import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
// Aquí iría index.jsx pero no es necesario colocar el nombre del archivo, lo toma por defecto
import ListaOpciones from "../ListaOpciones";
import Button from "../Button";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const { registrarColaborador } = props;
  //de esta forma se puede evitar usar tanto props, queda un código más limpio

  const envioControl = (e) => {
    e.preventDefault();
    //Con esto no se recarga la página luego de clickear el botón Crear. La e viene de evento, se le puede dar el nombre que se quiera, pero es común usar e.
    // console.log("Controlar el Envio");

    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  //cuando trabajamos con React los eventos siguen la estructura de
  //camelCase es decir, si el evento en HTML se llama onclick en React será
  //onClick
  return (
    <section className="formulario">
      <form onSubmit={envioControl}>
        <h2>Completa el formulario para crear el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Formulario;

// Notes:
//Si usamos required o required={true}
