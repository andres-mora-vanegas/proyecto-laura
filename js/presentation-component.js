class Presentation extends MasterComponent {
  getStyles() {
    return `
        
            background-color: #fff;
            width: 400px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            
            img {
            border-radius: 10px;
            }

            h2 {
            color: rgb(106, 106, 250);
        }
        `;
  }

  getTemplate() {
    return `
        <section id="sobre-mi">
        <h1>Laura Milena Mora Blanco</h1>

        <img src="https://avatars.githubusercontent.com/u/122644863?v=4" alt="Laura Milena Mora Blanco" width="200" />
        <h2>Sobre mi</h2>
        <p>
        Soy Laura Milena Mora Blanco, una entusiasta de la programación y el
        desarrollo web.
        </p>
        </section>   
    `;
  }
}

customElements.define("my-presentation", Presentation);
