import React, { useContext } from 'react';
import Color from '../../constsants/Color';
import { PaletteContext } from '../../context/PaletteContext';

interface ColorBoxProps {
  color: Color
}
const ColorBox: React.FC<ColorBoxProps> = ({
  color
}) => {
  return (
    <div style={{ color: color }}>
    </div>
  )
}

const Child: React.FC = () => {
  const palette = useContext(PaletteContext);

  return (
    <div>
      <ColorBox color={palette.color} />
    </div>
  )
}

export default Child;