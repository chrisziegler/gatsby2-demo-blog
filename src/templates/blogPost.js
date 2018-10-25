import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <div>
      <h1>{title}</h1>
      <div
        className="blogpost"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div style={{ marginBottom: '1rem', fontFamily: 'Roboto' }}>
        {next && <Link to={next.frontmatter.path}>Next</Link>}
      </div>

      <div style={{ fontFamily: 'Roboto' }}>
        {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
      </div>
    </div>
  );
};

// queries these items from the filesystem to be available as props above
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
