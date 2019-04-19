import React from "react";

const PageIndexItem = props => {
  return (
    <div className="page-index-item">
      <a href={props.url}>
        <p className="page-clickable-title">pageRank: {props.title}</p>
      </a>
      <p className="page-rank">{props.pageRank}</p>
      <p className="page-url">{props.url}</p>
      <p />
      <p className="page-excerpt">{props.excerpt}</p>
    </div>
  );
};

export default PageIndexItem;
