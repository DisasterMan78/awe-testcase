'use strict';

import {ReadURL} from './../ReadURL/ReadURL';

export class ExtractTagFromURL {

  constructor(tag, url) {
    this.tag = tag.replace('.', '\\.');
    this.url = url;
    this.readURL = new ReadURL();
  }


  /*
  *
  * ReadURL with promise
  *
  */
  extract = () => {
    return new Promise((resolve, reject) => {
      this.readURL.getContent(this.url).then((response) => {
        let regexSelfClosingTag = new RegExp('<' + this.tag + '[^>]*/>'),
            regexClosedTag = new RegExp(
              // Less than + Opening tag name,
              '<' + this.tag +
              // Anything BUT closing tag
              '((?!<\/' + this.tag + '>).)*' +
              // Closing tag
              '<\/' + this.tag + '>'
            ),
            matchedTag = response.match(regexSelfClosingTag);

        if(matchedTag === null){
          matchedTag = response.match(regexClosedTag);
        }

        resolve(matchedTag);
      });
    });
  }

  /*
  *
  * ReadURL with callback
  *
  */
  // extract = () => {
  //   return new Promise((resolve, reject) => {
  //     this.readURL.getContent(this.url, (status, response) => {
  //       if(status === 'success') {
  //         let regexSelfClosingTag = new RegExp('<' + this.tag + '[^>]*/>'),
  //             regexClosedTag = new RegExp(
  //               // Less than + Opening tag name,
  //               '<' + this.tag +
  //               // Anything BUT closing tag
  //               '((?!<\/' + this.tag + '>).)*' +
  //               // Closing tag
  //               '<\/' + this.tag + '>'
  //             ),
  //             matchedTag = response.match(regexSelfClosingTag);

  //         if(matchedTag === null){
  //           matchedTag = response.match(regexClosedTag);
  //         }

  //         resolve(matchedTag);
  //       }else{
  //         reject(response);
  //       }
  //     });
  //   });
  // }

}
