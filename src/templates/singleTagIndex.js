import React from 'react';
import { graphql, Link } from 'gatsby';

const SingleTagsTemplate = ({ data, pageContext }) => {
  // console.log('pageContext', pageContext);
  const { posts, tagName } = pageContext;
  return (
    <div>
      <div>Post's about {`${tagName}`}</div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleTagsTemplate;
