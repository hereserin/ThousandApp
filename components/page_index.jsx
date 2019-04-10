import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPages } from "../actions/page_actions";
import PageIndexItem from "./page_index_item";
import * as QueryParsers from "./../util/search_query_parsers";

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.query === undefined) {
      this.props.fetchPages();
    } else {
      const userQuery = this.parseUrlToUserInput();
      this.props.searchPages({ query: userQuery });
    }
  }

  composePageList() {
    const pages = this.props.pages;
    const pageList = [];
    Object.keys(pages).forEach(page_id => {
      let page = pages[page_id];
      // pageList.push(<li key={page_id}>{page.title}</li>);
      pageList.push(
        <PageIndexItem
          key={page_id}
          title={page.title}
          url={page.url}
          excerpt={page.excerpt}
        />
      );
    });

    return pageList;
  }

  parseUrlToUserInput() {
    const urlQuery = this.props.match.params.query;
    return QueryParsers.parseUrlToUserInput(urlQuery);
  }

  render() {
    if (this.props.pages === undefined) {
      return <p>LOADING!!</p>;
    }

    return (
      <div className="page-index-container">
        <ul>{this.composePageList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    pages: entities.pages,
    query: ownProps.match.params.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPages: () => {
      return dispatch(fetchPages());
    },
    searchPages: query => {
      return dispatch(searchPages(query));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageIndex)
);
