import React, {
  createContext,
  useContext
} from 'react';
import { observable } from 'mobx';
import Color from '../constsants/Color';

class PaletteStore {
  @observable
  color: Color
  @observable
  name: string

  constructor(color: Color, name: string) {
    this.color = color;
    this.name = name;
  }

  changeColor(color: Color) {
    this.color = color;
  }

  setGreen() {
    this.color = Color.GREEN;
  }
}

export const PaletteContext = createContext<PaletteStore>(new PaletteStore(Color.RED, '빨강'));

interface Props {
  children: React.ReactNode
}

export const PaletteProvider: React.FC<Props> = ( { children } ) => {
  const palette = useContext(PaletteContext);

  return (
    <PaletteContext.Provider value={palette}>
      {children}
    </PaletteContext.Provider>
  )
};
