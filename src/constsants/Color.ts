enum Color {
  RED = '#ff0000',
  GREEN = '#00ff00',
  BLUE = '#0000ff'
}

export default Color

export function getColorName(color: Color): string {
  switch (color) {
  case Color.BLUE:
    return '파랑'
  case Color.RED:
    return '빨강'
  case Color.GREEN:
    return '초록'
  }
}