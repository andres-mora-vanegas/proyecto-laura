class MasterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  getStyles() {
    return `
    *{
        color:blue;
    }
    `;
  }

  getTemplate() {}

  saludar() {
    console.log(`Hola, soy un método de MasterComponent`);
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                ${this.getStyles()}
            </style>
            ${this.getTemplate()}
        `;
  }
}
