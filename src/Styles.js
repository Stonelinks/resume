import { prefix } from "inline-style-prefixer"

export const Create = function(rules) {
  const styles = {}
  for (var k in rules) {
    styles[k] = prefix(rules[k])
  }
  return styles
}

export const colors = {
  white: "#ffffff",
  grey0: "#919498"
}

const unitString = function(unit) {
  return function(value) {
    const str = new String(`${value}${unit}`) // eslint-disable-line
    str["raw"] = value
    return str
  }
}

export const em = unitString("em")
export const px = unitString("px")

export const pageWidth = px(800)

export const spacing = {
  xs: px(4),
  small: px(8),
  regular: px(16),
  medium: px(24),
  large: px(32),
  xl: px(56)
}

export const fontSize = {
  small: px(12),
  regular: px(15),
  medium: px(18),
  large: px(22),
  xl: px(28),
  xxl: px(36)
}

export const lineHeights = {
  regular: em(1.5),
  small: em(1.25)
}

export default {
  Create,
  vars: {
    colors,
    pageWidth,
    spacing,
    fontSize,
    lineHeights
  }
}
