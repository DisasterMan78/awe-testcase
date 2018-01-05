'use strict';

export class ExtractHTMLFromDom {

  html = (htmlSelector) => {
    let element = document.querySelector(htmlSelector),
        clone,
        tmp = document.createElement("div"),
        html;

    if (element !== null) {
        clone = element.cloneNode(true);
        tmp.appendChild(clone);
        html = tmp.innerHTML;
    } else {
        html = '<!-- unable to locate ' + htmlSelector + ' -->';
    };
    return html;
  }

}