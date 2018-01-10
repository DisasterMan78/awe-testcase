import chai, { expect } from 'chai';
import sinon, { spy } from 'sinon';

import {ReadURL} from './ReadURL';
import { __RewireAPI__ as readUrlRewire } from './ReadURL';

describe('ReadURL', () => {

  beforeEach(() => {
    this.xhr = sinon.useFakeXMLHttpRequest();

    this.requests = [];

    this.xhr.onCreate = (xhr) => {
      this.requests.push(xhr);
    }

    this.response = 'Response not set';
  });

  afterEach(() => {
    this.requests = [];

    // global.XMLHttpRequest = this.realXMLHttpRequest;
    this.xhr.restore();

    this.response = 'Response not set';
  });

  it('should get file content from a successful xhr request', (done) => {

    const readURL = new ReadURL(),
          url = 'http://dummy.com/file.js';

    this.response = {
      status: 200,
      contentType: 'application/html',
      responseText: `<awe.DisplayCode
        htmlSelector={'.awe-login'}
        jsxFile={'/src/js/components/AncoaAwe.js'}
        jsxTag={'awe.Login'}
        componentFile={'/src/js/components/Login/Login.js'}
      />`
    };

    readURL.getContent(url)
      .then((response) => {
        expect(response).to.equal(this.response.responseText);
        done();
      });

    this.requests[0].respond(this.response.status,
      {
        'Content-Type': this.response.contentType
      },
      this.response.responseText
    );

  });

  it('should return an eror from an unsuccessful xhr request', (done) => {

    const readURL = new ReadURL(),
          url = 'http://dummy.com/file.js';

    this.response = {
      status: 500,
      contentType: 'application/json',
      responseText: JSON.stringify({})
    };

    readURL.getContent(url)
      .then(
        (response) => {
          expect(response).to.equal(this.response.responseText);
          done();
        },
        (error) => {
          expect(error).to.equal('ajax error:' + this.response.status + ' ' + this.response.responseText);
          done();
        }
      );

    this.requests[0].respond(this.response.status,
      {
        'Content-Type': this.response.contentType
      },
      this.response.responseText
    );

  });

});
