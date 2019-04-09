import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchPages, fetchPages, clearPages } from "../actions/page_actions";
import * as QueryParsers from "./../util/search_query_parsers";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseUserInputToUrl = this.parseUserInputToUrl.bind(this);
    this.state = {
      searchInput: ""
    };
  }

  handleSearchInput(e) {
    return this.setState({
      searchInput: e.currentTarget.value
    });
  }

  handleSubmit() {
    const userQuery = this.parseUserInputToUrl();
    this.props.clearPages();
    this.props.searchPages({ query: userQuery });
    this.props.history.push(`/pages/search/=${userQuery}`);
  }

  parseUserInputToUrl() {
    const userQueryInput = this.state.searchInput;
    return QueryParsers.parseUserInputToUrl(userQueryInput);
  }

  handleSearchInputKeyPress(event) {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className="main-search-bar-container">
        <section className="main-search-bar">
          <h1> Thousand</h1>
          <input />
          <div className="search-button-container">
            <button onClick={this.handleSubmit}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPages: () => {
      return dispatch(fetchPages());
    },
    searchPages: query => {
      return dispatch(searchPages(query));
    },
    clearPages: () => {
      return dispatch(clearPages());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SearchBar)
);
