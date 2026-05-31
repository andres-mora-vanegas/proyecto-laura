class Menu extends MasterComponent {
  getStyles() {
    return `
     
      section#menu {
        justify-content: center;
        padding: 0 auto;
        display: block;
        background-color: #edd6a1;
        align-items: center;
        height: 100%;
        position: fixed;
        overflow: auto;
      }   

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 20px;
      }

      nav{
      display: flex;
      flex-flow: column;
      height: stretch;
      justify-content: space-between;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        transform: rotate(-90deg);
        
      }

      li a {
        color: #572364;
        text-decoration: none;
        padding: 0px 30px;
      }

    `;
  }

  getTemplate() {
    return `
      <section id="menu">
      <nav>
        <img src="https://pps.services.adobe.com/api/profile/BC5E04775EDE4DAC0A495EDD@AdobeID/image/95a3c98c-3984-4066-9583-0c48a378d37c/230" alt="Logo Personal">
        <ul>
          <li><a href="./index.html#sobre-mi">HOME</a></li>
          <li><a href="./about.html#habilidades">SOBRE MI</a></li>
          <li><a href="./portfolio.html#redes-sociales">PORTAFOLIO</a></li>
          <li><a href="./index.html#contacto">CONTACTO</a></li>
        </ul>
      </nav>
      </section>

        
    `;
  }
}

customElements.define("my-menu", Menu);
