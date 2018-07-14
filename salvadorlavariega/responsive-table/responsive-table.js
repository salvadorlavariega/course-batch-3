import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `responsive-table`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ResponsiveTable extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'responsive-table',
      },
    };
  }
}

window.customElements.define('responsive-table', ResponsiveTable);
