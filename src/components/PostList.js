import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import H1 from './H1'
import H2 from './H2'
import '../styles/postList.css'

import indexStyles from '../styles/index.module.css'

import StayHome from '../img/18168-stay-safe-stay-home.gif'
import HandWash from '../img/17686-wash-your-hands-regularly.gif'
import Mask from '../img/17895-wear-mask.gif'
import Sanitizer from '../img/17899-hand-sanitizer.gif'
import Punched from '../img/18246-covid-19-get-punched.gif'

let count = 0;

export default class IndexPage extends React.Component {
  render() {
    const { posts, title} = this.props
		
    return (
      <section className="section" id="mobileSection">
        <div className="container">
        <div className="covid-19 column has-text-centered-mobile">
        	<img src={StayHome} alt="StayHome" width="250px" height="250px"/>
			<img src={HandWash} alt="HandWash" width="250px" height="250px"/>
			<img src={Mask} alt="Mask" width="250px" height="250px"/>
			<img src={Sanitizer} alt="Sanitizer" width="250px" height="250px"/>
			<img src={Punched} alt="Punched" width="250px" height="250px"/>
        </div>
          {posts.map(({ node: post }) => (
            <div className="columns postList" key={post.id}>
              <div className="column featuredImage" style={{order: count}}>
              	<Link to={post.slug}>
			  		<Img fluid ={post.featured_media.localFile.childImageSharp.fluid}/>
			  	</Link> 
              </div>
              <div className="column" id={indexStyles.postContent}>
              <div className="postContentInner">
              <span key={count += 1}></span>
              {count == 2 ? (
                <span key={count = 0}></span>
              ): null }
              <H2>
                <Link to={post.slug} dangerouslySetInnerHTML={{ __html: post.title}}></Link>
              </H2>
              <p style={{marginBottom: `15px`}}>{post.fields.readingTime.text}</p>
              <div>              
              	<div className="post-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt}}/>
              <div className={indexStyles.postMeta}>
              <div className="postMetaDetails">  
            <div className="publishedDate"><small>Published on {post.date}</small></div>
               <div className="readMore"> 
               <Link className="readMoreLink" to={post.slug}>
                  Read more
               </Link></div></div>
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
    fields {
      readingTime {
        text
      }
    }
    featured_media{
	    localFile{
		    childImageSharp{
			    fluid(maxWidth: 500, quality: 100) {
      				...GatsbyImageSharpFluid
   				}
		    }
	    }
    }
    date(formatString: "DD/MM/YYYY")
    slug
  }
`
