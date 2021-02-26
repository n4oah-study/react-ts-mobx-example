import React, { ChangeEvent, useContext } from "react";
import Color from "../../constsants/Color";
import { PaletteContext } from "../../context/PaletteContext";
import { Input } from "reactstrap";
import { observer } from "mobx-react-lite";

interface ColorBoxProps {
  color: Color;
}
const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div style={{ backgroundColor: color, width: 100, height: 100 }}></div>
  );
};

const Child: React.FC = observer(() => {
  const palette = useContext(PaletteContext);

  function onChangeColorRadio(e: ChangeEvent<HTMLInputElement>) {
    const color: Color = e.target.value as Color;
    palette.changeColor(color);
  }

  return (
    <div>
      <ColorBox color={palette.color} />
      <Input
        name="change-radio"
        type="radio"
        value={Color.RED}
        onChange={onChangeColorRadio}
      />
      빨강
      <Input
        name="change-radio"
        type="radio"
        value={Color.GREEN}
        onChange={onChangeColorRadio}
      />
      초록
      <Input
        name="change-radio"
        type="radio"
        value={Color.BLUE}
        onChange={onChangeColorRadio}
      />
      파랑
    </div>
  );
});

export default Child;
