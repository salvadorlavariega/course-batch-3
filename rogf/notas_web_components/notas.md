# Web components
Estan basados en los Web Component standards
- Personalizables
- Reutilizables
- Encapsulados
- Funcionan sin frameworks Javascript o HTML

Tienen 4 especificaciones:

- Custom elements
- Shadow DOM
- HTML inports
- HTML templates

La HTMLElement interface representa cualquier HTML element
Algunos elementos implementan directamente esta interfaz y otros lo hacen heredandola.

### Definir un nuevo elemento
````js
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);
````

### Crear un shadow DOM

````js
const header = document.createElement('header');
const shadowRoot = header.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; 
// Could also use appendChild().

// header.shadowRoot === shadowRoot
// shadowRoot.host === header

// Elemento personalizado

// Use custom elements API v1 to register a new HTML tag and define its JS behavior
// using an ES6 class. Every instance of <fancy-tab> will have this same prototype.
customElements.define('fancy-tabs', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

    // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>#tabs { ... }</style> <!-- styles are scoped to fancy-tabs! -->
      <div id="tabs">...</div>
      <div id="panels">...</div>
    `;
  }
  ...
});
````
## Elementos del Shadow DOM
- Shadow host: The regular DOM node that the shadow DOM is attached to.
- Shadow tree: The DOM tree inside the shadow DOM.
- Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
- Shadow root: The root node of the shadow tree.