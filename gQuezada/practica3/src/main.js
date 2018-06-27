const fs = require('fs');

const readFile = (path) => {
  let file = null;
  try {
    file = fs.readFileSync(path, 'utf8');
  }
  catch(error) {
    if(error.code === 'ENOENT') {
      return '';
    }
  }

  return file;
};

const removeBlanks = (string) => {
  const withoutLines = string.replace(/\n/g,'')
  const withoutTabs = withoutLines.replace(/\t/g, '');
  const withoutSpaces = withoutLines.replace(/\s{2,}/g, '');
  return withoutSpaces.trim();
};

const getHTMLTree = (lexicalComponents) => {
  const stack = [];
  for(let lexicalComponent of lexicalComponents) {
    switch (lexicalComponent.type) {
      case 'openTag':

      break;
      case 'doctype':

      break;
      case 'textNode':

      break;
      case 'closeTag':

      break;
    }
  }
};

const getLexicalComponents = (content) => {

  const lexicalComponents = [];

  const lexicalComponentsExpressions = [
                                          {
                                            regularExpresion: /^<[^<>/!]+>/,
                                            type: 'openTag'
                                          },
                                          {
                                            regularExpresion: /^<![^<>/!]+>/,
                                            type: 'doctype'
                                          },
                                          {
                                            regularExpresion: /^[^<]+/,
                                            type: 'textNode'
                                          },
                                          {
                                            regularExpresion: /^<\/[^<>/!]+>/,
                                            type: 'closeTag'
                                          }
                                      ];


  let finished = null;

  do{
    finished = true;
    for(let lexicalComponent of lexicalComponentsExpressions) {
      const result = lexicalComponent.regularExpresion.exec(content);
      if(result) {
        finished = false;
        lexicalComponents.push({
          value: result[0],
          type: lexicalComponent.type
        });
        content = removeFromString(result[0], content);
        break;
      }
    }
  }
  while(!finished);
  return lexicalComponents;
};

const removeFromString = (toRemove, from) => {
  const size = toRemove.length;
  return from.substring(size,from.size);
};

const getStyleTree = () => {

};

const main = (file) => {
  console.log('Inicia ejecución');
  let htmlContent = readFile(file);
  console.log('Archivo sin quitar caracteres especiales');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log(htmlContent);
  console.log('---------------------------------------------------------------------------------------------------------');
  htmlContent = removeBlanks(htmlContent);
  console.log('Archivo quitando caracteres blancos');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log(htmlContent);
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log('Generando componentes lexicos');
  console.log('---------------------------------------------------------------------------------------------------------');
  const lexicalComponents = getLexicalComponents(htmlContent);
  console.log(lexicalComponents);
  console.log('---------------------------------------------------------------------------------------------------------');
  getHTMLTree(lexicalComponents);

};

module.exports = {readFile, getHTMLTree, getStyleTree, main};
