'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as utils from '../../utilities'

import * as awe from '../Tabs/Tabs';
import * as synth from '../SyntaxHighlighter/SyntaxHighlighter';

export class DisplayCode extends Component {

  static propTypes = {
    htmlSelector: PropTypes.string.isRequired,
    jsxFile: PropTypes.string.isRequired,
    jsxTag: PropTypes.string.isRequired,
  };

  static defaultProps = {
    htmlSelector: '.awe-display-code'
  };

  constructor(props) {
    super(props);

    this.state = {
      tabs: [{
          id: 'html',
          label: 'HTML',
          content: '',
          className: 'awe-syntax-highlighter__html',
        },
        {
          id: 'jsx',
          label: 'JSX',
          content: '',
          className: 'awe-syntax-highlighter__jsx',
        },
      ],
      componentProps: [],
      htmlSelector: props.htmlSelector
    }
  }


    componentDidMount() {
      let tabs = this.state.tabs,
          extractHtml = new utils.ExtractHTMLFromDom(),
          jsx,
          extractTag = new utils.ExtractTagFromURL(this.props.jsxTag, this.props.jsxFile);

      tabs[0].content = <synth.SyntaxHighlighter
                          language = { 'markup' }
                          code = { extractHtml.html(this.state.htmlSelector) }
                        />;
      this.setState({tabs: tabs});

      extractTag.extract().then((jsx) => {

        tabs[1].content = (
          <div>
            <synth.SyntaxHighlighter
              language={'jsx'}
              code={jsx[0]}
            />
          </div>
        );
        this.setState({tabs: tabs});
      });
    }


  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info);
  }

  render() {

    return (
      <div className="awe-display-code">
        <awe.Tabs
          tabs={this.state.tabs}
        />
      </div>
    )
  }
}


// Add to RegExp prototype
RegExp.prototype.execAll = function(string) {
    var matches = [];
    var match = null;
    while ((match = this.exec(string)) != null) {
        var matchArray = [];
        for (var i in match) {
            if (parseInt(i) == i) {
                matchArray.push(match[i]);
            }
        }
        matches.push(matchArray);
    }
    return matches;
}