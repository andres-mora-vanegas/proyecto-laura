class Socialmedia extends MasterComponent {
  getStyles() {
    return `

            background-color: #fff;
            width: 400px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
                        
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
    return `<h2>Redes sociales</h2>
<ul>
  <li>
    <a href="https://www.linkedin.com/in/laura-milena-mora-blanco/">LinkedIn</a>
  </li>
  <li>
    <a href="https://github.com/LauraMoraBlanco">GitHub</a>
  </li>
</ul>
`;
  }
}

customElements.define("my-socialmedia", Socialmedia);
