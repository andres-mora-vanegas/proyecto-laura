class FormContact extends MasterComponent {
  connectedCallback() {
    this.formEvent();
    this.saludar();
  }

  getStyles() {
    return `
    textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 10px;
        box-sizing: border-box;
        }

        input[type="submit"] {
        background-color: #2d3368;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }
    `;
  }

  getTemplate() {
    return `
        
        <h2>Contacto de ${this.getAttribute("nombre")}</h2>
        <p>
            Email:
            <a href="mailto:${this.getAttribute("email")}">${this.getAttribute("email")}</a>
        </p>
        <form>
            <label for="message">Mensaje:</label><br />
            <textarea id="message" name="message" rows="4" cols="50"></textarea
            ><br />
            <input type="submit" value="Enviar" />
        </form>
        
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
