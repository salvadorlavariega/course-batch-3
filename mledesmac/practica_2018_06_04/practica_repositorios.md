#Descripción pruebas unitarias

##vuejs
```js
import Vue from 'vue'

describe('Component', () => {
	/**
	Estamos procesando com parametro un template con unas etiquetas, en donde buscamos reemplazar el valor o html
	dentro de las etiquetas.
	En este caso estamos verificando que la etiqueta sea un span y que el valor sea 123
	*/
  it('static', () => {
    const vm = new Vue({
      template: '<test></test>',
      components: {
        test: {
          data () {
            return { a: 123 }
          },
          template: '<span>{{a}}</span>'
        }
      }
    }).$mount()
    expect(vm.$el.tagName).toBe('SPAN')
    expect(vm.$el.innerHTML).toBe('123')
  })

  /**
    Estamos procesando como parametro un template con etiquetas anidadas, en donde buscamos reemplazar el valor o html
    dentro de las etiquetas definidas como test,
    En este caso estamos verificando que el contenido sea de tipo "tabla" con el renglon con valor 123
  */
  it('using component in restricted elements', () => {
    const vm = new Vue({
      template: '<div><table><tbody><test></test></tbody></table></div>',
      components: {
        test: {
          data () {
            return { a: 123 }
          },
          template: '<tr><td>{{a}}</td></tr>'
        }
      }
    }).$mount()
    expect(vm.$el.innerHTML).toBe('<table><tbody><tr><td>123</td></tr></tbody></table>')
  })

  /**
  * Estamos procesando como parametro un template, que tiene como parametro o atributo la palabra reservada, 
  * en donde se hara el reemplazo de todo el contenido. 
  * En este caso estamos verificando que el contenido sea de tipo tabla con el valor en el renglo de 123
  */
  it('"is" attribute', () => {
    const vm = new Vue({
      template: '<div><table><tbody><tr is="test"></tr></tbody></table></div>',
      components: {
        test: {
          data () {
            return { a: 123 }
          },
          template: '<tr><td>{{a}}</td></tr>'
        }
      }
    }).$mount()
    expect(vm.$el.innerHTML).toBe('<table><tbody><tr><td>123</td></tr></tbody></table>')
  })

  /**
  * Estamos procesando como parametro un template, que tiene como caracteristica el atributo inline-template,
  * En este caso estamos verificando el remplazo del valor del a y estamos vericando que el  valor sea child dentro del 
  * nodo span.
*/
  it('inline-template', () => {
    const vm = new Vue({
      template: '<div><test inline-template><span>{{a}}</span></test></div>',
      data: {
        a: 'parent'
      },
      components: {
        test: {
          data () {
            return { a: 'child' }
          }
        }
      }
    }).$mount()
    expect(vm.$el.innerHTML).toBe('<span>child</span>')
  })

  /**
  * Revisa que el contenido del componente se del tipo warning
*/
  it('fragment instance warning', () => {
    new Vue({
      template: '<test></test>',
      components: {
        test: {
          data () {
            return { a: 123, b: 234 }
          },
          template: '<p>{{a}}</p><p>{{b}}</p>'
        }
      }
    }).$mount()
    expect('Component template should contain exactly one root element').toHaveBeenWarned()
  })

  
})
```

##Pupeteer


```js
module.exports.addTests = function({testRunner, expect, puppeteer, headless}) {
  const {describe, xdescribe, fdescribe} = testRunner;
  const {it, fit, xit} = testRunner;
  const {beforeAll, beforeEach, afterAll, afterEach} = testRunner;

  /**
  * Mediante este método estamos verificando si la versión de explorador se ejecuta en modo headless 
  */
  describe('Browser.version', function() {
    it('should return whether we are in headless', async({browser}) => {
      const version = await browser.version();
      expect(version.length).toBeGreaterThan(0);
      expect(version.startsWith('Headless')).toBe(headless);
    });
  });

  /**
  * Mediante este método estamos verificando si el explorador es de tipo safari
  */
  describe('Browser.userAgent', function() {
    it('should include WebKit', async({browser}) => {
      const userAgent = await browser.userAgent();
      expect(userAgent.length).toBeGreaterThan(0);
      expect(userAgent).toContain('WebKit');
    });
  });

 /**
 *  Mediante este método estamos verificando la funcionalidad de conectividad del server 
*/
  describe('Browser.process', function() {
    it('should return child_process instance', async function({browser}) {
      const process = await browser.process();
      expect(process.pid).toBeGreaterThan(0);
      const browserWSEndpoint = browser.wsEndpoint();
      const remoteBrowser = await puppeteer.connect({browserWSEndpoint});
      expect(remoteBrowser.process()).toBe(null);
      await remoteBrowser.disconnect();
    });
  });
};
```