import React from 'react'
import { storiesOf } from '@storybook/react'
import i18n from '../i18n'
import themeDecorator from '../theme-decorator'
import StyledFooter from './footer.styled.js'
import TachyonsFooter from './footer.tachyons.js'

storiesOf('Footer', module)
  .addDecorator(themeDecorator)
  .add('styled-system', () => (
    <div style={{fontFamily: 'system-ui', padding: 10 }}>
      <StyledFooter codeUrl="https://github.com/ipfs-shipyard/ipld-explorer-components" i18n={i18n} />
    </div>
  ))
  .add('tachyons', () => (
    <div style={{fontFamily: 'system-ui', padding: 10 }}>
      <TachyonsFooter codeUrl="https://github.com/ipfs-shipyard/ipld-explorer-components" i18n={i18n} />
    </div>
  ))
