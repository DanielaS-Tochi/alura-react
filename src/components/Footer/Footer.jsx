import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        {/* <a href="https://www.aluracursos.com/">
          <img src="/img/facebook.png" alt="Facebook" /> */}
        {/* </a> */}

        <a
          href="https://x.com/DaniTochiCode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a
          href="https://www.instagram.com/danitochicode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img
        src="/img/daniela-silvana-tochi.jpg"
        alt="Daniela"
        className="img-logo"
      />
      <strong>Desarrollado por Daniela Silvana Tochi</strong>
    </footer>
  );
};

export default Footer;

// Para que un enlace en HTML se abra en una nueva pestaña, necesitas agregar el atributo target="_blank" al elemento <a>. Aquí está tu código actualizado:

// <a href="https://www.instagram.com/danitochicode/" target="_blank">
//   <img src="/img/instagram.png" alt="instagram" />
// </a>

// Nota importante
// Si quieres mejorar la seguridad de los enlaces externos abiertos en una nueva pestaña, considera agregar también el atributo rel="noopener noreferrer". Esto evita que la nueva página tenga acceso al objeto window.opener en el navegador, lo cual puede prevenir problemas de seguridad.

// <a href="https://www.instagram.com/danitochicode/" target="_blank" rel="noopener noreferrer">
//   <img src="/img/instagram.png" alt="instagram" />
// </a>
// Esto es especialmente relevante para enlaces a sitios externos como redes sociales. 😊
