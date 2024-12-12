import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario.jsx';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import Equipo from './components/Equipo/Equipo.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([{

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "UX y Diseño"
  },
  {

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "Front End"
  },
  {

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "Front End"
  },
  {

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "Programación"
  },
  {

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "DevOps"
  },
  {

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "Móvil"
  },
  {

    nombre: "Daniela",
    puesto: "estudiante",
    foto: "https://github.com/DanielaS-Tochi.png",
    equipo: "Innovación y Gestión"
  }])

  //Ternario --> condición ? seMuestra : noSeMuestra
  // condición --> && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    //Spread operator (... estos ... significan una copia, estamos copiando algo)
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("Eliminar colaborador")
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
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}

      />
      }
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
          <Equipo datos={equipo}
            key={equipo.titulo}
            //Key es un valor único
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
