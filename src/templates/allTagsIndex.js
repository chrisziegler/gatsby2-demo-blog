import React from 'react';
import { graphql, Link } from 'gatsby';

const AllTagsTemplate = ({ data, pageContext }) => {
  // console.log(pageContext); see that we just have an array of tags
  const { tags } = pageContext;
  return (
    <div style={{ fontFamily: 'Roboto' }}>
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`tags/${tagName}`}>{tagName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllTagsTemplate;
