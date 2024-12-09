import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario.jsx';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import Equipo from './components/Equipo/Equipo.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Ternario --> condición ? seMuestra : noSeMuestra
  // condición --> && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  // Lista de Equipos

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/* Esto lo hicimos para que se vea la lista de equipos */}

      {/* <Equipo equipo="Programación" />
      <Equipo equipo="Front End" />
      <Equipo equipo="Data Science" />
      <Equipo equipo="DevOps" />
      <Equipo equipo="UX y Diseño" />
      <Equipo equipo="Móvil" />
      <Equipo equipo="Innovación y Gestión" /> */}

      {/* Aquí haremos una lista de equipos con map */}

      {
        equipos.map((equipo) =>
          // console.log("Equipo: ", equipo);
          <Equipo datos={equipo} key={equipo.titulo} />
          //Key es un valor único
        )
      }
    </div>
  );
}

export default App;
