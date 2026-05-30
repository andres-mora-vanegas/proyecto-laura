class Skills extends MasterComponent {
  getStyles() {
    return `
      
      section {
        background-color: #edd6a1;
        margin: 20px 20px;
        padding: 20px;
        width: 250px;
        border-radius: 10px;
        
        
      }

      h2 {
        color: #572364;
        text-align: center;
      }

      ul {
        list-style: none;
        padding: 0;
        color: #572364;
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

    return `
      <section>
        <h2>${this.getAttribute("titulo")}</h2>
        <ul>
          ${habilidades}
        </ul>
      </section>
    `;
  }
}

customElements.define("my-skills", Skills);
