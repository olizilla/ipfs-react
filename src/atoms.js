import styled from 'styled-components'
import { Flex, Text } from 'rebass'
import { style, color, borders, borderColor, themeGet } from 'styled-system'

export const BorderBox = styled(Flex)(
  {},
  borders,
  borderColor
)

export const HoverLink = styled(Text)({
  color,
  textDecoration: 'none',
  opacity: 0.7,
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    opacity: 1,
  }
})

HoverLink.defaultProps = {
  color: 'charcoal',
  as: 'a'
}

export const Svg = styled('svg')({
  fill: 'currentColor',
  verticalAlign: 'middle'
})
