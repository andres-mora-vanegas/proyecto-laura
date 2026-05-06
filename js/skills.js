class Skills extends MasterComponent {
  getStyles() {
    return `/* estilos para el componente */
h2 {
  color: rgb(106, 106, 250);
}

ul {
  list-style: none;
  padding: 0;
}
`;
  }

  getTemplate() {
    let habilidades = this.getAttribute("habilidades");
    habilidades = habilidades
      ?.split(",")
      .map((habilidad) => {
        return "<li>" + habilidad + "</li>";
      })
      .join("");

    return `<h2>${this.getAttribute("titulo")}</h2>
<ul>
  ${habilidades}
</ul>
`;
  }
}

customElements.define("my-skills", Skills);
