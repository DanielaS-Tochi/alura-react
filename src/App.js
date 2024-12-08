import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario.jsx';
import Header from './components/Header/Header.jsx';
import MiOrg from './components/MiOrg/index.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condición ? seMuestra : noSeMuestra
  // condición --> && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}


      <MiOrg cambiarMostrar={cambiarMostrar} />

    </div>
  );
}

export default App;
