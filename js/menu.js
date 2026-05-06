class Menu extends MasterComponent {
  getStyles() {
    return `nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
}
  ul {
  list-style: none;
  padding: 0;
}
`;
  }

  getTemplate() {
    return `

      <nav>
        <ul>
          <li><a href="#sobre-mi">Sobre mi</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#redes-sociales">Redes sociales</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
        
    `;
  }
}

customElements.define("my-menu", Menu);
