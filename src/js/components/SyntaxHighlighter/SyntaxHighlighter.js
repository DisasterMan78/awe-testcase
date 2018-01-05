import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import Jsx from 'prismjs/components/prism-jsx'
import Pretty from 'pretty';

import * as awe from '../Tabs/Tabs';

export class SyntaxHighlighter extends Component {

  static propTypes = {
    html: PropTypes.string,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    let code = Prism.highlight(Pretty(this.props.code), Prism.languages[this.props.language])
// console.log(code)
    this.state = {
      code: code,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("componentWillReceiveProps", nextProps.value, this.props.value);
  }

  render() {

    return (
      <pre
        className={'awe-syntax-highlighter'}
        dangerouslySetInnerHTML={{__html: this.state.code}}
      />
    )
  }
}
