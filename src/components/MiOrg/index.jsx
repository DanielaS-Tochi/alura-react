// import { useState } from "react";
//Lo comenté porque me marcaba que no se usaba useState, al menos comprobé que el funcionamiento seguía igual

import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - Hooks
  //useState
  //useState()
  //El hook useState() es utilizado para agregar estado a nuestro componente.
  //const [nombreVariable, funcionActualizar] = useState(valorInicial);
  console.log(props);
  //   const [mostrar, actualizarMostrar] = useState(true);

  //   const clickControl = () => {
  //     console.log("Mostrar/ocultar elemento", !mostrar);
  //     actualizarMostrar(!mostrar);
  //   };
  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
