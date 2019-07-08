import React, { Component } from "react";

class MySearch extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            id="search-text"
            value={this.props.searchTerm}
            onChange={this.props.handleSearchChange}
          />
          <input type="submit" value="Search" />
        </form>
      </React.Fragment>
    );
  }
}

export default MySearch;
