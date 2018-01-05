'use strict';

import * as axios from 'axios';

export class ReadURL {
  /*
  *
  * axios in promise
  *
  */
  getContent = (url) => {

console.log('ReadURL.getContent')
    return new Promise((resolve, reject) => {
console.log('ReadURL.getContent => Promise')
      axios.get(url)
        .then((response) => {
console.log('ReadURL.getContent axios.get().then =>', response.data)
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /*
  *
  * axios with callbacks
  *
  */
//   getContent = (url, callback) => {
// console.log('promise')
//     axios.get(url)
//       .then((response) => {
// console.log('ReadURL.getContent axios.get().then =>', response.data)
//         callback('success', response.data);
//       })
//       .catch((error) => {
//         callback('error', error);
//       });
//   }


  /*
  *
  * XMLHttpRequest style with callbacks
  *
  */
//  getContent = (url, callback) => {
// console.log('Promise')
//       let xhr = new XMLHttpRequest();

//       xhr.open("GET", url, false);
//       xhr.onreadystatechange = () => {
// console.log('onreadystatechange', xhr.readyState)
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
// console.log('200')
//             var allText = xhr.responseText;
// console.log(allText)
//             callback('success', allText);
//           } else {
// console.log('unable to open file', xhr.status, xhr.responseText)
//             reject('error', xhr.status + ' ' + xhr.responseText);
//           }
//         }
//       };
//       xhr.send(null);

//   };

}
