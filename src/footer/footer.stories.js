import React from 'react'
import { storiesOf } from '@storybook/react'
import i18n from '../i18n'
import themeDecorator from '../theme-decorator'
import Footer from './'

storiesOf('Footer', module)
  .addDecorator(themeDecorator)
  .add('default', () => (
    <div style={{fontFamily: 'system-ui' }}>
      <Footer codeUrl="https://github.com/ipfs-shipyard/ipld-explorer-components" i18n={i18n} />
    </div>
  ))
