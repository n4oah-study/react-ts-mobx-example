import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { PaletteContext } from "../../context/PaletteContext";
import Child from "./Child";

const Parent: React.FC = observer(() => {
  const palette = useContext(PaletteContext);

  return (
    <div>
      <p>{palette.name}</p>
      <Child></Child>
    </div>
  );
});

export default Parent;
