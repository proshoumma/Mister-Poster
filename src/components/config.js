/**
 * configuration file
 * colors, themes, base styles etc
 */

// colors
const colors = {
  'googleBlue100': {
    'color': '#c6dafc'
  },
  'googleBlue300': {
    'color': '#7baaf7'
  },
  'googleBlue500': {
    'color': '#4285f4'
  },
  'googleBlue700': {
    'color': '#3367d6'
  }
}

const PRIMARY = 'googleBlue'

// helper function to get colors
export function getColor(string) {
  if (string) {
    if (string.indexOf('#') > -1 || string.indexOf('rgba') > -1
        || string.indexOf('rgb') > -1) {
      return string
    }
    if (colors[string]) {
      return colors[string].color
    }
    if (colors[`${string}500`]) {
      return colors[`${string}500`].color
    }
  }
  return colors[`${PRIMARY}500`].color
}
