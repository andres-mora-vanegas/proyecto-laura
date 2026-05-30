class FormContact extends MasterComponent {
  connectedCallback() {
    this.formEvent();
    this.saludar();
  }

  getStyles() {
    return `
      section {
        background-color: #3c1346;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
      }

      section#formulario {
        display: block;
      }

      section#contacto {
        display: block;
      }
    
      h2 {
        color: #edd6a1;
      }

      p {
        color: #edd6a1;
      }

      a {
        text-decoration: none;
        color: #edd6a1;
      }

      label {
        color: #edd6a1;
      }

      textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 10px;
        box-sizing: border-box;
      }

      input[type="submit"] {
        background-color: #2d6447;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
      }

      ul {
        list-style: none;
        padding: 0;
        color: #edd6a1;
      }
  
    `;
  }

  getTemplate() {
    return `
        <section>
          <section id="formulario">
            <h2>Contacto de ${this.getAttribute("nombre")}</h2>
            <p>
                Email:
                <a href="mailto:${this.getAttribute("email")}">${this.getAttribute("email")}</a>
            </p>
            <form>
                <label for="message">Mensaje:</label><br/>
                <textarea id="message" name="message" rows="4" cols="50"></textarea><br/>
                <input type="submit" value="Enviar" />
            </form>
          </section>

        <section id="contacto">
          <h2>Redes Sociales</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/laura-milena-mora-blanco/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/LauraMoraBlanco">GitHub</a>
            </li>
          </ul>
        </section>
      </section>
        
    `;
  }

  formEvent() {
    console.log(`1`, 1);
    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        var mensaje = this.shadowRoot.querySelector("textarea").value;
        console.log(mensaje);
      });
  }
}

customElements.define("my-form-component", FormContact);
