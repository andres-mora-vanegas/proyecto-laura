class Portafolio extends MasterComponent {
  getStyles() {
    return `
      section {
        margin: 20px;
        border-radius: 10px;
        display: flex;
        margin: 20px 20px;
        flex-flow: wrap;
      }

      article{
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        text-align: left;
      }
      

      section#primeros-proyectos {
        display: flex;
        gap: 20px;    
        justify-content: center;
        padding: 20px;
        
        img {
          width: auto;
          height: 300px;
          border-radius: 10px;
        }
      }

      section#segundos-proyectos {
        display: flex;
        gap: 20px;    
        justify-content: center;
        padding: 20px;
        
        img {
          width: auto;
          height: 300px;
          border-radius: 10px;
        }
      }

      ul {
        list-style: none;
        padding: 0;
        color: #edd6a1;
      }

      h2 {
        color: #edd6a1;
      }

      h3 {
        color: #edd6a1;
      }

      p {
        color: #edd6a1;
      }

      a {
        color: #c9e265;
      }

      img{
        width: 100%;
      }
    `;
  }

  getTemplate() {
    const items = [
      {
        imagen:
          "https://mir-s3-cdn-cf.behance.net/projects/original/356f02111703413.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png",
        proyecto: "Website: OpenSky Information",
        descripcion:
          "Sitio web empresarial que ofrece servicios especializados en bibliotecología, educación virtual y tecnología.",
        enlace:
          "https://www.behance.net/gallery/111703413/Website-OpenSky-Information-UIUX-Version-1",
      },
      {
        imagen:
          "https://mir-s3-cdn-cf.behance.net/projects/original/356f02111703413.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png",
        proyecto: "Website: OpenSky Information",
        descripcion:
          "Sitio web empresarial que ofrece servicios especializados en bibliotecología, educación virtual y tecnología.",
        enlace:
          "https://www.behance.net/gallery/111703413/Website-OpenSky-Information-UIUX-Version-1",
      },
      {
        imagen:
          "https://mir-s3-cdn-cf.behance.net/projects/original/356f02111703413.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png",
        proyecto: "Website: OpenSky Information",
        descripcion:
          "Sitio web empresarial que ofrece servicios especializados en bibliotecología, educación virtual y tecnología.",
        enlace:
          "https://www.behance.net/gallery/111703413/Website-OpenSky-Information-UIUX-Version-1",
      },
      {
        imagen:
          "https://mir-s3-cdn-cf.behance.net/projects/original/356f02111703413.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png",
        proyecto: "Website: OpenSky Information",
        descripcion:
          "Sitio web empresarial que ofrece servicios especializados en bibliotecología, educación virtual y tecnología.",
        enlace:
          "https://www.behance.net/gallery/111703413/Website-OpenSky-Information-UIUX-Version-1",
      },
    ];

    const content = items
      .map(
        (item) => `
        <article>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/original/356f02111703413.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png" alt="Website: OpenSky Information">
          <h3>Website: OpenSky Information</h3>
          <p>Sitio web empresarial que ofrece servicios especializados en bibliotecología, educación virtual y tecnología.</p>
          <a href="https://www.behance.net/gallery/111703413/Website-OpenSky-Information-UIUX-Version-1">Ver más</a>
        </article>
      `,
      )
      .join("");

    return `
      <h2>Portafolio</h2>  
        <section>     
          ${content}          
        </section>      
    `;
    /*

    <section id="primeros-proyectos">
            <section id="proyecto1">
              <img src="https://mir-s3-cdn-cf.behance.net/projects/original/356f02111703413.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png" alt="Website: OpenSky Information">
              <h3>Website: OpenSky Information</h3>
              <p>Sitio web empresarial que ofrece servicios especializados en bibliotecología, educación virtual y tecnología.</p>
              <a href="https://www.behance.net/gallery/111703413/Website-OpenSky-Information-UIUX-Version-1">Ver más</a>
            </section>
            <section id="proyecto2">
              <img src="https://mir-s3-cdn-cf.behance.net/projects/original/16ff67133416415.Y3JvcCwxMTMxLDg4NSw0Nyww.jpg" alt="Manual Corporativo: OpenSky Information">
              <h3>Manual Corporativo: OpenSky Information</h3>
              <p>Manual Corporativo Versión 0.1 que guía tanto a diseñadores como a desarrolladores en el uso y aplicación correcta del logo, colores, tipografías, entre otros de la empresa.</p>
              <a href="https://www.behance.net/gallery/133416415/Manual-Corporativo-OpenSky-Information-2020">Ver más</a>
            </section>
          </section>
          <section id="segundos-proyectos">
            <section id="proyecto3">
              <img src="https://mir-s3-cdn-cf.behance.net/projects/original/f3ed24232489899.Y3JvcCwyMjA5LDE3MjgsMzIyLDA.jpg" alt="Presentaciones para contenido académico para cursos virtuales">
              <h3>Presentaciones para contenido académico para cursos virtuales</h3>
              <p>Recopilación de presentaciones para contenido académico destinado a cursos virtuales.</p>
              <a href="https://www.behance.net/gallery/232489899/Presentaciones-para-Contenido-Acadmico-CUN">Ver más</a>
            </section>
            <section id="proyecto4">
              <img src="https://mir-s3-cdn-cf.behance.net/projects/original/cf4a93188748363.Y3JvcCwyMjA5LDE3MjgsMzIyLDA.jpg" alt="Diagramación de componentes de programas de formación">
              <h3>Diagramación de componentes de programas de formación</h3>
              <p>Recopilación de diagramas y componentes para programas de formación.</p>
              <a href="https://www.behance.net/gallery/188748363/Diagramacion-de-componentes-SENA-2022">Ver más</a>
            </section>
          </section>
        </section>
    */
  }
}

customElements.define("my-portafolio", Portafolio);
