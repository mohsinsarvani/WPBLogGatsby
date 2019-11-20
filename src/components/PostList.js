import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import H2 from '../components/H2'
import '../components/postList.css'


import indexStyles from "../styles/index.module.css"

export default class IndexPage extends React.Component {
  render() {
    const { posts, title} = this.props
		
    return (
      <section className="section">
        <div className="container">
          {posts.map(({ node: post }) => (
            <div
              className="columns postList"
              key={post.id}
            >
              <div className="column featuredImage">
              <Link to={post.slug}><Img resolutions ={post.featured_media.localFile.childImageSharp.resolutions}/></Link>
              </div>
              
              <div className="column" id={indexStyles.postContent}>
              <H2>
                <Link to={post.slug}>
                  {post.title}
                </Link>
              </H2>
                
              <div>              
              <div dangerouslySetInnerHTML={{ __html: post.excerpt}} />
              <div className={indexStyles.postMeta}>
              <div className="postMetaDetails">  
            <div className="publishedDate"><small>Published on {post.date}</small></div>
               <div className="readMore"> 
               <Link className="readMoreLink" to={post.slug}>
                  Read more
               </Link></div>
               </div>
              </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    content
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    featured_media{
	    localFile{
		    childImageSharp{
			    resolutions(width:450, height:350){
				    src
				    width
				    height
			    }
		    }
	    }
    }
    date(formatString: "DD/MM/YYYY")
    slug
  }
`
