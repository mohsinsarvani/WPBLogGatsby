import React from 'react'
import Helmet from 'react-helmet'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import Navbar from './Navbar'
import './all.sass'

import GlobalStyle from '../global-styles'
import userConfig from '../../config'

import Footer from './Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
    <meta name="google-site-verification" content="MGH2iJ6T5_R_hxmCHeikDehPlc7Ttn6eL_v-Owv0718" />
      <meta name="author" content={`${userConfig.author}`} />
      <meta name="description" content={`${userConfig.description}`} />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <div><ScrollUpButton /></div>
    <Footer>
      <p>© 2019 - 2020 Zakir Sajib. All Rights Reserved.</p>
      <p>Built with Gatsby - datasource is WordPress - code on gitHub - hosted on Netlify</p>
    </Footer>
  </div>
)

export default TemplateWrapper
