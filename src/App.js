import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './components/Formulario/Formulario.jsx';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import Equipo from './components/Equipo/Equipo.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "DevOps"
    },
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "Móvil"
    },
    {
      id: uuid(),
      nombre: "Daniela",
      puesto: "estudiante",
      foto: "https://github.com/DanielaS-Tochi.png",
      equipo: "Innovación y Gestión"
    }]);

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  const setColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log("Nuevo equipo creado: ", nuevoEquipo);
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  }


  return (
    <div>
      <Header />
      <ToastContainer />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          key={Math.random()}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) =>
        <Equipo
          datos={equipo}
          key={equipo.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          setColor={setColor}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;