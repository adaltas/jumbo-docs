import React from 'react'

import SiteLayout from '../components/layout/site-layout'
import TextContainer from '../components/layout/text-container'

const NotFoundPage = () => (
  <SiteLayout>
    <TextContainer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </TextContainer>
  </SiteLayout>
)

export default NotFoundPage
