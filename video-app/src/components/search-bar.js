import React, { Component } from 'react';

// Search bar is referred to as a class component and has state.
export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only place this will be used, as this.setState() should be used
    // in all other scenarios to force re-rendering on state change.
    this.state = {
      term: ''
    };
  }

  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    // input is a controlled component, as the input value is controlled by
    // the state, rather than the input itself - if the onChange() event
    // is not handled, no input appears on-screen.
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ e => { this.handleInputChange(e.target.value) } } />
      </div>
    );
  }
}