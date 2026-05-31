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
        font-size: 20px;
      }

      ul {
        list-style: none;
        padding: 0;
        color: #572364;
    }
        .container{
          display: flex;
        }
          .left{
            width:30%;
            align-content: center;
          }
          .right{
            width:70%;
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
        <div class="container">
          <div class="left">
            <img src="${this.getAttribute("image")}" alt="Imagen de habilidades" width="100%">
          </div>
          <div class="right">
            <h2>${this.getAttribute("titulo")}</h2>
            <ul>
              ${habilidades}
            </ul>
          </div>
        </div>
        
      </section>
    `;
  }
}

customElements.define("my-skills", Skills);
