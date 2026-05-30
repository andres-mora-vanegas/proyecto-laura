class Presentation extends MasterComponent {
  getStyles() {
    return `
      
      section {
        max-width: 1000px;
        margin: 0px auto;
        padding: 20px;
        justify-content: center;
        display: flex;
        align-items: center;
      }

      section#presentacion {
        display: block;
        text-align: left;
      }
            
      img {
        border-radius: 20px;
        width: 300px;
      }

      h1 {
        color: #edd6a1;
      }

      h2 {
        color: #edd6a1;
      }

      p {
        color: #edd6a1;
      }
      
      button {
        background-color: #c9e265;
        color: #2d6447;
        padding: 10px 20px;
        border-radius: 20px;
        border: none;
      }
    `;
  }

  getTemplate() {
    return `
        <section>
          <section id="presentacion">
            <h1>¡Hola! Soy Laura Mora</h1>
            <h2>Diseñadora Gráfica & Web</h2>
            <p>Combino creatividad y funcionalidad para crear expereincias digitales atractivas y fáciles de usar. Comprendo las necesidades de mis clientes y usuarios finales, diseñando soluciones personalizadas y efectivas. Soy apasionada del diseño, detallista y me mantengo al tanto de las últimas tendencias digitales.</p>
            <button>DESCARGAR CV</button>
          </section>
          <section id="foto">
            <img src="/perfil.png" alt="Laura Milena Mora Blanco" width="200" />
          </section>
        </section>   
    `;
  }
}

customElements.define("my-presentation", Presentation);
