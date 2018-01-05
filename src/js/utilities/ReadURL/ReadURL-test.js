import chai, { expect } from 'chai';
import sinon, { spy } from 'sinon';

import {ReadURL} from './ReadURL';



/*
*
* Sinon useFakeXMLHttpRequest
*
*/
describe('ReadURL', () => {

  beforeEach(function() {

    this.xhr = sinon.useFakeXMLHttpRequest();

    var requests = [];
    this.xhr.onCreate = (xhr) => {
console.log('xhr created')
      requests.push(xhr);
    };

    this.response = 'Response not set';
  });

  afterEach(function() {
    this.xhr.restore();

    this.response = 'Response not set';
  });

  it('should get file content from an xhr request', () => {
    const readURL = new ReadURL(),
          url = 'http://dummy.com/file.js',
          urlContent = `<awe.DisplayCode
            htmlSelector={'.awe-login'}
            jsxFile={'/src/js/components/AncoaAwe.js'}
            jsxTag={'awe.Login'}
            componentFile={'/src/js/components/Login/Login.js'}
          />`;
    let responseContent;

    readURL.getContent(url).then((type, response) =>{
console.log('ReadURL-test response', response)
      expect(type).to.equal('success');
      expect(response).to.equal(urlContent);
      done();
    });


    window.setTimeout(() => {
console.log('ReadURL-test trigger response')
      this.requests[0].respond(200,
        {
          'Content-Type': 'application/json'
        },
        urlContent
      )
    }, 0);

  });

});

/*
*
* Sinon sandbox
*
*/
// describe('ReadURL', () => {

//   beforeEach(function() {

//   this.sandbox = sinon.sandbox.create();

//   this.sandbox.useFakeServer();

//   this.server = this.sandbox.server;
//   this.urlContent = `<awe.DisplayCode
//           htmlSelector={'.awe-login'}
//           jsxFile={'/src/js/components/AncoaAwe.js'}
//           jsxTag={'awe.Login'}
//           componentFile={'/src/js/components/Login/Login.js'}
//         />`;

//   this.server.respondWith([200, { "Content-Type": "application/text" }, this.urlContent]);

//   });

//   afterEach(function() {
//     this.sandbox.restore();
//   });

//   it('should get file content from an xhr request', () => {
//     const readURL = new ReadURL(),
//           url = 'http://dummy.com/file.js';

//     let responseContent;

//     readURL.getContent(url).then((response) => {
//       responseContent = response;
//     });

//     window.setTimeout(() => {
// console.log('setTimeout')
//       this.server.respond();
//     }, 0);

//     expect(responseContent).to.equal(this.urlContent);

//   });

// });

/*
*
* XMLHttpRequest style with callbacks
*
*/
// describe('ReadURL', () => {

//   beforeEach(function() {

//     this.xhr = sinon.useFakeXMLHttpRequest();

//     var requests = [];
//     this.xhr.onCreate = (xhr) => {
// console.log('xhr created')
//       requests.push(xhr);
//     };

//     this.response = 'Response not set';
//   });

//   afterEach(function() {
//     this.xhr.restore();

//     this.response = 'Response not set';
//   });
//   it('should get file content from an xhr request', () => {
//     const readURL = new ReadURL(),
//           url = 'http://dummy.com/file.js',
//           urlContent = `<awe.DisplayCode
//             htmlSelector={'.awe-login'}
//             jsxFile={'/src/js/components/AncoaAwe.js'}
//             jsxTag={'awe.Login'}
//             componentFile={'/src/js/components/Login/Login.js'}
//           />`,
//           callback = sinon.spy();
//     let responseContent;

//     readURL.getContent(url, callback);

//     expect(this.requests.length).to.equal(1);

//     this.requests[0].respond(200,
//       {
//         'Content-Type': 'application/json'
//       },
//       urlContent
//     );

//     callback.calledWith('success', urlContent);

//   });

// });
