import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {

  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        content: PropTypes.node,
        className: PropTypes.string,
      }).isRequired
    ).isRequired,
    selected: PropTypes.number,
    disabled: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: 'Content 1',
        className: '',
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        content: 'Content 2',
        className: '',
      },
    ],
    selected: 1,
    disabled: {}
    // disabled: {'tab2' : true},
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected - 1,
      disabled: this.props.disabled
    }
  }

  render() {
    return (
      <div className={'awe-tabs ' + this.props.className}>
        <ul className="awe-tabs__controls nav">
          {this.props.tabs.map((tab, i) =>
            <li
              key={i}
              role="tab"
              id={'awe-tabs_' + tab.id}
              className={
                'nav-item nav-link' +
                (this.state.selected === i ? ' active' : '') +
                (this.state.disabled[tab.id] === true ? ' disabled' : '')
              }
              aria-selected={this.state.selected === i ? 'true' : 'false'}
              aria-disabled={this.props.disabled[tab.id] === true ? 'true' : 'false'}
              aria-controls={tab.id}
              onClick={(event) => {
                if(this.props.disabled[tab.id] !== true) {
                  this.setState({selected: i});
                }
              }}
            >
              {tab.label}
            </li>
          )}
        </ul>
        <div className="awe-tabs__content-container">
          {this.props.tabs.map((tab, i) =>
            <div
              key={i}
              id={'awe-tabs-content_' + tab.id}
              className={
                'awe-tabs__content ' +
                (typeof(tab.className) !== 'undefined' ? tab.className : '') +
                (this.state.selected === i ? ' active' : '')
              }
              style={{
                display: (this.state.selected === i ? null : 'none')
              }}

              >
                {tab.content}
              </div>
          )}
        </div>
      </div>
    )
  }
}
