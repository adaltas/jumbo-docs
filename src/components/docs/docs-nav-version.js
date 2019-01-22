import React from 'react'

import '../theme.less'
import docsStyle from './docs.module.css'

const DocsNavVersion = ({ version }) => (
  <div className={docsStyle.docsVersion}>
    <span>Jumbo Documentation v{version}</span>
  </div>
)

export default DocsNavVersion
