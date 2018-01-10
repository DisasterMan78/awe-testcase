'use strict';

export class ReadURL {

  getContent = (url) => {
      let xhr = new global.XMLHttpRequest();
      return new Promise((resolve, reject) => {

          xhr.open("GET", url, false);
          xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200 || xhr.status == 0) {
                      var allText = xhr.responseText;
                      resolve(allText);
                  } else {
                      reject('ajax error:' + xhr.status + ' ' + xhr.responseText);
                  }
              }
          };
          xhr.send(null);
      });

  };

}
