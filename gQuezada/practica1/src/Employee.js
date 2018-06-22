class Employee {
   constructor(name, email, phone, cell, sha256) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.cell = cell;
      this.sha256 = sha256;
   }

   getHTML() {
      const tr = document.createElement('tr');
      let td = [];
      let textNode = [];

      const headersNames = Object.getOwnPropertyNames(this);

      const headersNodes = document.querySelector('#employees thead tr').childNodes;
      let columnsIndex = 0;

      for (const header of headersNodes) {
         if (header.nodeName === 'TH') {
            textNode.push(document.createTextNode(this[headersNames[ columnsIndex ]]));
            td.push(document.createElement('td'));
            td[ columnsIndex ].appendChild(textNode[ columnsIndex ]);
            tr.appendChild(td[ columnsIndex ]);
            columnsIndex++;
         }
      }

      return tr;
   }
}
